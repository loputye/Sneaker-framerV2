import { chromium } from 'playwright-core';
const [,, url, sectionName] = process.argv;
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(3000);
const r = await page.evaluate((name) => {
  const sec = document.querySelector(`section[data-framer-name="${name}"], [data-framer-name="${name}"]`);
  if (!sec) return null;
  const out = [];
  const walk = (el, d) => {
    if (d > 3) return;
    const rc = el.getBoundingClientRect();
    if (rc.height < 8) return;
    out.push({ d, cls: [...el.classList].filter((c) => c.startsWith('framer-')).slice(0, 2).join(' '), nm: el.getAttribute('data-framer-name'), h: Math.round(rc.height), w: Math.round(rc.width) });
    [...el.children].forEach((c) => walk(c, d + 1));
  };
  walk(sec, 0);
  return out;
}, sectionName);
console.log(JSON.stringify(r));
const footer = await page.evaluate(() => {
  const f = document.querySelector('[data-framer-name="Desktop"]');
  if (!f) return 'NO [data-framer-name=Desktop]';
  const rc = f.getBoundingClientRect();
  return { tag: f.tagName, h: Math.round(rc.height), top: Math.round(rc.top + scrollY), cls: f.className.toString().slice(0, 60) };
});
console.log('FOOTER:', JSON.stringify(footer));
await browser.close();
