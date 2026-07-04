import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(process.argv[2], { waitUntil: 'networkidle' });
await page.waitForTimeout(2500);
await page.evaluate(() => window.scrollTo(0, 3900));
await page.waitForTimeout(800);
const sample = () => page.evaluate(() => {
  const sec = document.querySelector('section[data-framer-name="Brands"]');
  const out = [];
  sec.querySelectorAll('img, [data-framer-name]').forEach((el) => {
    const cs = getComputedStyle(el);
    if (cs.transform !== 'none' || (el.tagName === 'IMG' && el.src.includes('svg'))) {
      out.push({ tag: el.tagName, cls: [...el.classList].slice(0,2).join(' '), nm: el.getAttribute('data-framer-name'), src: (el.src||'').split('/').pop()?.slice(0,20), tf: cs.transform.slice(0, 48) });
    }
  });
  return out.slice(0, 10);
});
const a = await sample();
await page.waitForTimeout(800);
const b = await sample();
console.log('A', JSON.stringify(a, null, 0));
console.log('B', JSON.stringify(b, null, 0));
// also letters in footer for animation shape
await browser.close();
