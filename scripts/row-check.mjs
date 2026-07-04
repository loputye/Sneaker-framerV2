import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: Number(process.argv[3] || 1000), height: 900 } });
await page.goto(process.argv[2], { waitUntil: 'networkidle' });
await page.waitForTimeout(2200);
await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
await page.waitForTimeout(1000);
const r = await page.evaluate(() => {
  const foot = document.querySelector('footer');
  const row = foot?.querySelector('.framer-tyd2me');
  const cs = row ? getComputedStyle(row) : null;
  return {
    footerCls: foot?.className.toString(),
    rowRect: row ? [Math.round(row.getBoundingClientRect().width), Math.round(row.getBoundingClientRect().height)] : null,
    rowCS: cs ? { disp: cs.display, w: cs.width, h: cs.height, flexFlow: cs.flexFlow, gap: cs.gap, pad: cs.padding } : null,
    rowParentCls: row?.parentElement ? [...row.parentElement.classList].join(' ') : null,
    rowParentRect: row?.parentElement ? [Math.round(row.parentElement.getBoundingClientRect().width), Math.round(row.parentElement.getBoundingClientRect().height)] : null,
  };
});
console.log(JSON.stringify(r, null, 1));
await browser.close();
