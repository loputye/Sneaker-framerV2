// One-shot codemod: restore CMS data access in the exported Framer bundles.
//
// The Design-to-AI exporter strips each collection's data chunks
// (`chunks: [""]`, index `url: ""`) and replaces the runtime query hook with
// a dumb per-alias stub that ignores where/limit/offset — so search, filters
// and pagination would be dead.
//
// This script re-points every collection at its published data chunks on
// framerusercontent.com (the same immutable CDN the bundles already use for
// all images/fonts) and delegates `__framer_useQueryData` to the real
// QueryEngine that ships in `_framer-runtime.js`. Result: native Framer
// query semantics (CONTAINS search, INTERSECT category filters, sorting,
// pagination counts) identical to the published site.
//
// Idempotent: running it twice is a no-op.
import fs from 'node:fs';
import path from 'node:path';

const FRAMER_DIR = path.join(process.cwd(), 'src/framer');

const CDN = 'https://framerusercontent.com/modules';
const COLLECTIONS = {
  // Magazine articles
  '2141e47c-9c6d-40e4-9b34-e6c96a913dab': `${CDN}/u39xhU6fUj657odBl4Xm/I448n51LV8RC7ipFz3NB/TWHZahxMp`,
  // Business docs (shipping/returns/privacy/terms table-of-contents entries)
  'c5a36916-064d-4091-8bb6-94bfc129f317': `${CDN}/krzINDtI9JxSyGULB8rI/WfkDIhFZdQHZHc5f4vl2/QOgS8yO19`,
  // Shoes products
  '959e97c7-2542-4a37-896e-a09a59aaa98d': `${CDN}/pZnfY0Y5oVEwIFWbwseo/nLQuNacprbzBwAoMYKOX/wWC8EGMFo`,
  // Stores
  '53891c41-ecb1-4b0e-97f1-453a6b8d2052': `${CDN}/bxbAzRjBaLPl1Q6Vqz0q/QEofGjON8Ow9ZSLvTCfX/nRUBpiZY0`,
  // Metadata (shoe categories & genders used by the floating filters)
  'fc53885d-96bc-4a80-99f1-0dd881b4ecf2': `${CDN}/0sYL7oXCpFvF2RErmtGc/KsSXcO3PhqEgm5lhqmr6/N2cLBMuUA`,
};

const STUB = `const __FRAMER_CMS_DATA__ = {
  // alias: [ { /* item fields */ } ],
};
const __framer_useQueryData = (query) => {
  const alias = query && query.from && query.from.alias;
  return (alias && __FRAMER_CMS_DATA__[alias]) || [];
};`;

const DELEGATE = `import { useQueryData as __cms_useQueryData } from "./_framer-runtime.js";
const __framer_useQueryData = (query) => __cms_useQueryData(query);`;

const FILES = [
  'MainMagazine.js',
  'MainReturn.js',
  'MainShipping.js',
  'MainShoes.js',
  'MainStores.js',
  'TableOfContentsPopup.js',
  'FloatingSearch.js',
];

// 3. framerusercontent.com ignores the `?range=a-b,c-d` query parameter the
// exported loader uses for partial reads (it returns 200 + the whole file,
// tripping the "Unexpected response length" guard). Replace the loader with
// a cached whole-file fetch + local slicing — byte-identical results, one
// small download per collection, honors the same {from,to} contract.
function patchRangeLoader(src) {
  const start = src.indexOf('async function tM(');
  if (start === -1) return src;
  if (src.slice(start, start + 2000).includes('__wholeFileCache')) return src; // already patched
  // Find the end of the function via brace counting.
  let i = src.indexOf('{', start);
  let depth = 0;
  for (; i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') {
      depth--;
      if (depth === 0) break;
    }
  }
  const fn = src.slice(start, i + 1);
  const params = fn.match(/async function tM\((\w+), (\w+)\)/);
  if (!params) return src;
  const [, urlParam, rangesParam] = params;
  const replacement = `var __wholeFileCache = /* @__PURE__ */ new Map();
async function tM(${urlParam}, ${rangesParam}) {
  const key = String(${urlParam});
  let bufP = __wholeFileCache.get(key);
  if (!bufP) {
    bufP = fetch(key).then(async (res) => {
      if (res.status !== 200)
        throw Error(\`Request failed: \${res.status} \${res.statusText}\`);
      return new Uint8Array(await res.arrayBuffer());
    });
    __wholeFileCache.set(key, bufP);
  }
  return bufP.then((buf) => ${rangesParam}.map((r) => buf.slice(r.from, r.to)));
}`;
  return src.slice(0, start) + replacement + src.slice(i + 1);
}

// 4. The exporter bakes viewport-relative heights at canvas size
// (100vh → 800px). Restore the published pages' viewport units for the
// classes verified against the live CSS (scripts/diff-css.mjs).
const VIEWPORT_HEIGHT_FIXES = {
  'MainMagazine.js': [
    ['e15i7s', '800px', '100vh'],
    ['k6vl26', '800px', '100vh'],
  ],
  'MainAbout.js': [['10ms2ql', '800px', '100vh']],
  'MainStores.js': [['kuszop-container', '800px', '100vh']],
  'MainShoes.js': [['xh32ay-container', '640px', '80vh']],
};

function patchViewportHeights(file, src) {
  for (const [cls, from, to] of VIEWPORT_HEIGHT_FIXES[file] ?? []) {
    src = src.replace(new RegExp(`(\\.framer-${cls} \\{ [^}]*?)height: ${from}`), `$1height: ${to}`);
  }
  return src;
}

const ALL_FILES = [...FILES, 'MainAbout.js'];

for (const file of ALL_FILES) {
  const p = path.join(FRAMER_DIR, file);
  let src = fs.readFileSync(p, 'utf8');
  const before = src;

  src = patchRangeLoader(src);
  src = patchViewportHeights(file, src);

  // 1. Delegate the stripped query stub to the runtime QueryEngine.
  if (src.includes(STUB)) {
    src = src.replace(STUB, DELEGATE);
  }

  // 2. Restore collection chunk + index URLs.
  let chunks = 0;
  let indexes = 0;
  for (const [id, base] of Object.entries(COLLECTIONS)) {
    const marker = `chunks: [""], id: "${id}default"`;
    if (!src.includes(marker)) continue;
    src = src.replace(marker, `chunks: ["${base}-chunk-default-0.framercms"], id: "${id}default"`);
    chunks++;
    // Index URLs live in tN({ ... url: "" }) entries of the same collection
    // literal; each bundle defines exactly one chunked collection, so a
    // global replace is precise.
    const withIndexes = src.replaceAll('url: ""', `url: "${base}-indexes-default-0.framercms"`);
    indexes = (withIndexes.length - src.length) / (`${base}-indexes-default-0.framercms`.length);
    src = withIndexes;
  }

  if (src !== before) {
    fs.writeFileSync(p, src);
    console.log(`${file}: patched (stub→QueryEngine, ${chunks} chunk url, ${Math.round(indexes)} index urls)`);
  } else {
    console.log(`${file}: already patched`);
  }
}
