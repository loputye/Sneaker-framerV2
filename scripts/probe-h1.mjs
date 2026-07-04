import { chromium } from 'playwright-core';
const [,, url] = process.argv;
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: 390, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
await page.waitForTimeout(3500);
const data = await page.evaluate(() => {
  const wrap = document.querySelector('.framer-1r25u9g');
  if (!wrap) return { err: 'no wrap' };
  const h1 = wrap.querySelector('h1') || wrap.querySelector('.framer-text');
  const r = wrap.getBoundingClientRect();
  const out = {
    wrapH: +r.height.toFixed(1),
    wrapCls: wrap.className.slice(0, 90),
    h1Tag: h1?.tagName,
    h1Cls: h1?.className?.slice(0, 110),
    h1Style: h1?.getAttribute('style')?.slice(0, 200),
    fs: h1 ? getComputedStyle(h1).fontSize : null,
    varFs: h1 ? getComputedStyle(h1).getPropertyValue('--framer-font-size') : null,
    wrapStyle: wrap.getAttribute('style')?.slice(0, 200),
  };
  return out;
});
console.log(JSON.stringify(data, null, 1));
await browser.close();
