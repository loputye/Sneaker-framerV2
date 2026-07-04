import { chromium } from 'playwright-core';
const [,, url, widthArg] = process.argv;
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: Number(widthArg), height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
await page.waitForTimeout(3500);
const data = await page.evaluate(() => {
  const el = document.querySelector('.framer-695nz-container');
  const out = { chain: [], rules: [] };
  let p = el;
  while (p && p !== document.body) {
    const cls = [...p.classList].join(' ');
    if (/framer-(v-|[A-Za-z0-9]{5}\b)/.test(cls) || p.hasAttribute('data-framer-name')) out.chain.push({ cls: cls.slice(0, 100), nm: p.getAttribute('data-framer-name') });
    p = p.parentElement;
  }
  if (el) {
    const cs = getComputedStyle(el);
    out.computed = { w: cs.width, h: cs.height, aspect: cs.aspectRatio };
    for (const sh of document.styleSheets) {
      let rules; try { rules = sh.cssRules; } catch { continue; }
      const walk = (rs, media) => {
        for (const r of rs) {
          if (r.media) { walk(r.cssRules, r.media.mediaText); continue; }
          if (r.selectorText && r.selectorText.includes('695nz') && el.matches(r.selectorText.split(',')[0].trim())) {
            out.rules.push({ media, sel: r.selectorText.slice(0, 90), css: r.style.cssText.slice(0, 140) });
          }
        }
      };
      walk(rules, null);
    }
  }
  return out;
});
console.log(JSON.stringify(data, null, 1));
await browser.close();
