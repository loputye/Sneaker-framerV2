import { chromium } from 'playwright-core';
const url = process.argv[2];
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(3500);
const SELS = { cloudBack: '.framer-qvqw2a', cloudLeft: '.framer-hgqndl', cloudCenter: '.framer-diff9p', cloudRight: '.framer-1gfggbi', mock1: '.framer-13fxww1', mock2: '.framer-92cbqa', heroBg: '.framer-4ttzd1', scrollArea: '.framer-o2ifc4', heroInst: '.framer-zwncuu' };
for (const y of [0, 400, 1000, 1400, 2800, 3100]) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(600);
  const r = await page.evaluate((sels) => {
    const out = {};
    for (const [k, sel] of Object.entries(sels)) {
      const el = document.querySelector(sel);
      if (!el) { out[k] = null; continue; }
      const cs = getComputedStyle(el);
      out[k] = (el.getAttribute('data-framer-name') || '') + '|' + cs.opacity + '|' + cs.transform.slice(0, 55);
    }
    return out;
  }, SELS);
  console.log('Y=' + y, JSON.stringify(r, null, 0));
}
await browser.close();
