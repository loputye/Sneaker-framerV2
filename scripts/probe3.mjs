import { chromium } from 'playwright-core';
const url = process.argv[2];
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(3500);
for (const y of [0, 1200, 1500, 1700, 2200, 2600, 3000]) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(650);
  const r = await page.evaluate(() => {
    const g = (sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const cs = getComputedStyle(el);
      return cs.opacity.slice(0,5) + '|' + cs.transform.slice(0, 48);
    };
    return { coffee: g('.framer-1cxydv4'), plane: g('.framer-1805o0f'), legShadow: g('.framer-gkb3ke') };
  });
  console.log('Y=' + y, JSON.stringify(r));
}
await browser.close();
