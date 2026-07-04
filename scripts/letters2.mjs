import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: Number(process.argv[3] || 1000), height: 900 } });
await page.goto(process.argv[2], { waitUntil: 'networkidle' });
await page.waitForTimeout(2500);
await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
await page.waitForTimeout(1500);
const r = await page.evaluate(() => {
  const foot = document.querySelector('footer');
  const svgs = [...foot.querySelectorAll('svg')].filter((s) => s.querySelector('.framer-fit-text'));
  return svgs.map((s) => {
    const cs = getComputedStyle(s);
    const rc = s.getBoundingClientRect();
    const visible = rc.width > 0 && cs.display !== 'none';
    return { cls: [...s.classList].join(' ').slice(0, 30), vis: visible, tf: cs.transform.slice(0, 40), mt: cs.marginTop, top: Math.round(rc.top), h: Math.round(rc.height), alignSelf: cs.alignSelf };
  }).filter((x) => x.vis);
});
console.log(JSON.stringify(r, null, 0));
await browser.close();
