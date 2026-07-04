import { chromium } from 'playwright-core';
const [,, url] = process.argv;
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: 1000, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
await page.waitForTimeout(3500);
const data = await page.evaluate(() => {
  const wrap = document.querySelector('.framer-1r25u9g');
  const h1 = wrap?.querySelector('h1');
  const cont = document.querySelector('.framer-1uiwh0j-container');
  const r = (el) => { if (!el) return null; const b = el.getBoundingClientRect(); return { w: +b.width.toFixed(1), h: +b.height.toFixed(1), x: +b.x.toFixed(1), y: +b.y.toFixed(1) }; };
  return { wrap: r(wrap), h1: r(h1), cont: r(cont), fs: h1 ? getComputedStyle(h1).fontSize : null, inline: wrap?.getAttribute('style')?.slice(0, 100) };
});
console.log(JSON.stringify(data));
await browser.close();
