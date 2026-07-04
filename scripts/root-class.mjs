import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
await page.waitForTimeout(2500);
const r = await page.evaluate(() => {
  const main = document.querySelector('[data-framer-name="Main"], .framer-9Yclq');
  return { cls: main?.className.toString(), name: main?.getAttribute('data-framer-name'), w: Math.round(main?.getBoundingClientRect().width || 0) };
});
console.log(JSON.stringify(r, null, 1));
await browser.close();
