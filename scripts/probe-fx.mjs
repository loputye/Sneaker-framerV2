import { chromium } from 'playwright-core';
const url = process.argv[2];
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(6000);
const sample = () => page.evaluate(() => {
  const g = (sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const cs = getComputedStyle(el);
    return { opacity: cs.opacity, tf: cs.transform.slice(0, 70) };
  };
  return {
    shoe: g('.framer-695nz-container'),
    shadow: g('.framer-qyuvuf'),
    title: g('.framer-f0rlmn'),
    actions186: !!document.querySelector('.framer-186suw4'),
  };
});
const a = await sample();
await page.waitForTimeout(1200);
const b = await sample();
console.log(JSON.stringify({ a, b, loopMoving: a.shoe?.tf !== b.shoe?.tf, shadowMoving: a.shadow?.tf !== b.shadow?.tf }, null, 1));
await browser.close();
