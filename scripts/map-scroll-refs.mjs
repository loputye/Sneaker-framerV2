// Dev tool: map each ScrollSectionRef prop in a bundle to the section(s)
// whose elements reference it, so page wrappers can wire refs like Home does.
import fs from 'node:fs';

for (const f of process.argv.slice(2)) {
  const s = fs.readFileSync(f, 'utf8');
  console.log('=== ' + f);
  const secs = [...s.matchAll(/motion\d*\.section, \{ className: "([^"]+)", "data-framer-name": "([^"]+)"/g)].map(
    (m) => [m[2], m.index],
  );
  console.log('sections:', secs.map((x) => x[0]).join(' | '));
  const meta = s.match(/framerVariables": '\{([^']+)\}'/);
  if (!meta) continue;
  const vars = JSON.parse('{' + meta[1] + '}');
  const refProps = Object.keys(vars).filter((k) => String(vars[k]).startsWith('scrollSection'));
  for (const p of refProps) {
    const uses = [...s.matchAll(new RegExp('ref: ' + p + '\\b', 'g'))].map((m) => m.index);
    const near = uses.map((i) => {
      let best = null;
      for (const [name, si] of secs) {
        if (si < i) best = name;
        else break;
      }
      return best;
    });
    console.log(p, `(${vars[p]})`, 'used', uses.length + 'x, nearest sections:', [...new Set(near)].join(','));
  }
}
