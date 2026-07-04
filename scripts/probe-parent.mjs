import { chromium } from 'playwright-core';
const [,, url] = process.argv;
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: 390, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
await page.waitForTimeout(3000);
const data = await page.evaluate(() => {
  let el = document.querySelector('.framer-1r25u9g');
  const out = [];
  for (let i = 0; i < 4 && el; i++) {
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    out.push({ cls: [...el.classList].filter((c) => c.startsWith('framer-')).join(' ').slice(0, 80), h: +r.height.toFixed(1), csH: cs.height, inline: (el.getAttribute('style') || '').slice(0, 120) });
    el = el.parentElement;
  }
  return out;
});
console.log(JSON.stringify(data, null, 1));
await browser.close();
