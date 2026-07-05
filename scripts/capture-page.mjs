// Capture aligned per-section screenshots of one page (live or clone) for
// the six subpages. Section anchors are resolved per page config below;
// live and clone render at identical geometry (verified), so equal anchors
// produce pixel-aligned frames.
//
// Usage: node scripts/capture-page.mjs <page> <live|clone> <width> <outDir>
import { chromium } from 'playwright-core';
import fs from 'node:fs';

const [, , pageName, which, widthArg, outDir] = process.argv;
const width = Number(widthArg || 1440);
const height = 900;
const BASE = which === 'live' ? 'https://sneako.framer.website' : 'http://localhost:5173';
const url = `${BASE}/${pageName === 'home' ? '' : pageName}`;

// Section anchors: sel = element resolved on the page; extra = additional
// viewport slices below the anchor (for tall content sections).
const PAGES = {
  about: [
    { name: 'hero', sel: 'section[data-framer-name="Hero"]' },
    { name: 'large-statement', sel: 'section[data-framer-name="Large Statement"]' },
    { name: 'company-statistics', sel: 'section[data-framer-name="Company Statistics"]' },
    { name: 'team-members', sel: 'section[data-framer-name="Team Members"]' },
    { name: 'our-mission', sel: 'section[data-framer-name="Our Mission"]' },
    { name: 'the-approach', sel: 'section[data-framer-name="The Approach"]' },
    { name: 'footer', sel: 'footer' },
  ],
  magazine: [
    { name: 'hero', sel: 'section[data-framer-name="Hero"]' },
    { name: 'highlights', sel: 'main > section:not([data-framer-name])' },
    { name: 'all-publishes', sel: 'section[data-framer-name="All publishes"]' },
    { name: 'footer', sel: 'footer' },
  ],
  shoes: [
    { name: 'collection-grid-1', top: 0 },
    { name: 'collection-grid-2', top: 900 },
    { name: 'collection-grid-3', top: 1611 },
    { name: 'footer', sel: 'footer' },
  ],
  stores: [
    { name: 'store-locator', top: 0 },
    // the published /stores page has no footer at any breakpoint
  ],
  shipping: [
    { name: 'hero', sel: 'section[data-framer-name="Hero"]' },
    { name: 'content-1', sel: 'section[data-framer-name="Content"]' },
    { name: 'content-2', sel: 'section[data-framer-name="Content"]', offset: 900 },
    { name: 'content-3', sel: 'section[data-framer-name="Content"]', offset: 1800 },
    { name: 'footer', sel: 'footer' },
  ],
  returns: [
    { name: 'hero', sel: 'section[data-framer-name="Hero"]' },
    { name: 'content-1', sel: 'section[data-framer-name="Content"]' },
    { name: 'content-2', sel: 'section[data-framer-name="Content"]', offset: 900 },
    { name: 'content-3', sel: 'section[data-framer-name="Content"]', offset: 1800 },
    { name: 'footer', sel: 'footer' },
  ],
};

const anchors = PAGES[pageName];
if (!anchors) throw new Error(`unknown page ${pageName}`);
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({
  executablePath: '/usr/bin/google-chrome',
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars', '--force-device-scale-factor=1', '--disable-lcd-text'],
});
const page = await browser.newPage({ viewport: { width, height } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
await page.waitForTimeout(4500);

// settle lazy content by pre-scrolling the whole page
await page.evaluate(async () => {
  const h = document.documentElement.scrollHeight;
  for (let y = 0; y < h; y += 600) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 70));
  }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(2500);

// Deterministic frames: hide the Framer badge (live only renders one), stop
// time-based WAAPI loops at t=0, disable smooth scrolling.
await page.evaluate(() => {
  const st = document.createElement('style');
  st.textContent = `
    #__framer-badge-container, .__framer-badge, [name="framer-badge"] { display: none !important; }
    html { scroll-behavior: auto !important; }
    input { caret-color: transparent !important; }
  `;
  document.head.appendChild(st);
  for (const a of document.getAnimations()) {
    try {
      a.currentTime = 0;
      a.pause();
    } catch {
      /* ignore */
    }
  }
});

const resolved = await page.evaluate((anchors) => {
  return anchors.map((a) => {
    let top = a.top ?? 0;
    if (a.sel) {
      const el = document.querySelector(a.sel);
      if (!el) return { name: a.name, missing: true, top: 0 };
      top = Math.round(el.getBoundingClientRect().top + scrollY);
    }
    return { name: a.name, top: top + (a.offset ?? 0) };
  });
}, anchors);

// full page reference
await page.screenshot({ path: `${outDir}/${which}-full.png`, fullPage: true });

let i = 0;
for (const s of resolved) {
  i++;
  const tag = `${which}-s${String(i).padStart(2, '0')}-${s.name}.png`;
  if (s.missing) {
    console.log(`MISSING anchor: ${s.name}`);
    continue;
  }
  const maxScroll = await page.evaluate(() => document.documentElement.scrollHeight - innerHeight);
  await page.evaluate((y) => window.scrollTo(0, y), Math.max(0, Math.min(s.top, maxScroll)));
  await page.waitForTimeout(850);
  // pause any animations started since (appear effects fired on scroll)
  await page.evaluate(() => {
    for (const a of document.getAnimations()) {
      try {
        a.finish();
      } catch {
        /* infinite loops: pin at 0 */
        try {
          a.currentTime = 0;
          a.pause();
        } catch {
          /* ignore */
        }
      }
    }
  });
  await page.waitForTimeout(150);
  await page.screenshot({ path: `${outDir}/${tag}` });
}
console.log(`captured ${which} ${pageName} @${width}: ${resolved.length} sections`);
await browser.close();
