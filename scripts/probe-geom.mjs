// Probe footer letter geometry + key phone-hero/shipping containers at a width.
// usage: node probe-geom.mjs <url> <width>
import { chromium } from 'playwright-core';
const [,, url, widthArg] = process.argv;
const width = Number(widthArg || 1000);
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars', '--force-device-scale-factor=1'] });
const page = await browser.newPage({ viewport: { width, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
await page.waitForTimeout(4000);
await page.evaluate(async () => {
  const h = document.documentElement.scrollHeight;
  for (let y = 0; y < h; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 50)); }
  window.scrollTo(0, h);
});
await page.waitForTimeout(2000);
const data = await page.evaluate(() => {
  const vis = (el) => el.getClientRects().length > 0;
  const footers = [...document.querySelectorAll('footer')].filter(vis);
  const f = footers[0];
  const out = { footerCls: f ? f.className.slice(0, 120) : null, letters: [], hero: [], ship: [] };
  if (f) {
    f.querySelectorAll('svg[data-framer-component-type="RichTextContainer"]').forEach((s) => {
      const r = s.getBoundingClientRect();
      const fo = s.querySelector('foreignObject');
      const p = s.querySelector('p');
      out.letters.push({
        vb: s.getAttribute('viewBox'),
        scale: fo?.getAttribute('transform'),
        fs: p ? getComputedStyle(p).getPropertyValue('--framer-font-size').slice(0, 12) : null,
        w: Math.round(r.width), h: Math.round(r.height), x: Math.round(r.x), y: Math.round(r.y),
        tf: getComputedStyle(s).transform,
      });
    });
  }
  // shipping plane cluster + hero shoe containers
  ['.framer-1fp7q8p-container', '.framer-1oo7nd9', '.framer-f0rlmn', '.framer-qyuvuf', '.framer-695nz-container'].forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => {
      if (!vis(el)) return;
      const r = el.getBoundingClientRect();
      out.hero.push({ sel, w: Math.round(r.width), h: Math.round(r.height), x: Math.round(r.x), yAbs: Math.round(r.y + scrollY) });
    });
  });
  // plane: find img with plane src or the Shipping section children
  const ship = document.querySelector('[data-framer-name="Shipping"], section[data-framer-name="Shipping"]');
  if (ship) {
    const walk = (el, d) => {
      if (d > 2) return;
      const r = el.getBoundingClientRect();
      const cls = [...el.classList].filter((c) => c.startsWith('framer-')).slice(0, 1).join('');
      if (r.width > 20) out.ship.push({ d, cls, nm: el.getAttribute('data-framer-name'), w: Math.round(r.width), h: Math.round(r.height), x: Math.round(r.x) });
      [...el.children].forEach((c) => walk(c, d + 1));
    };
    walk(ship, 0);
  }
  return out;
});
console.log(JSON.stringify(data, null, 1));
await browser.close();
