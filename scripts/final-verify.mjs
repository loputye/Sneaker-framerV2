import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-dev-shm-usage'] });
for (const width of [1440, 1200, 1000, 810, 390, 375]) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  const warnings = [];
  page.on('console', (m) => { if (m.type() === 'warning' || m.type() === 'error') warnings.push(m.text().slice(0, 90)); });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle', timeout: 90000 });
  await page.waitForTimeout(3500);
  const res = await page.evaluate(() => ({
    interVar: document.fonts.check('14px "Inter Variable"'),
    inter: document.fonts.check('14px "Inter"'),
    ranchers: document.fonts.check('14px "Ranchers"'),
    overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth ? document.documentElement.scrollWidth : 0,
    mainVariant: document.querySelector('[data-framer-name="Desktop"], [data-framer-name="Tablet"], [data-framer-name="Phone"]')?.getAttribute('data-framer-name'),
    footerVariant: [...document.querySelectorAll('footer')].find((f) => f.getClientRects().length)?.getAttribute('data-framer-name'),
  }));
  const uniq = [...new Set(warnings)];
  console.log(width, JSON.stringify(res), 'console:', uniq.length ? uniq.slice(0, 4) : 'clean');
  await page.close();
}
await browser.close();
