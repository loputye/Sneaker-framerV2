import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: Number(process.argv[3] || 1000), height: 900 } });
await page.goto(process.argv[2], { waitUntil: 'networkidle' });
await page.waitForTimeout(2500);
await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
await page.waitForTimeout(1200);
const r = await page.evaluate(() => {
  const foot = document.querySelector('footer');
  if (!foot) return 'NO FOOTER';
  const svgs = [...foot.querySelectorAll('svg')];
  return svgs.map((s) => {
    const cs = getComputedStyle(s);
    const rc = s.getBoundingClientRect();
    return {
      cls: [...s.classList].join(' ').slice(0, 26),
      w: Math.round(rc.width), h: Math.round(rc.height), disp: cs.display, tf: cs.transform.slice(0, 36),
      fitText: !!s.querySelector('.framer-fit-text'),
      parentCls: [...(s.parentElement?.classList || [])].join(' ').slice(0, 40),
      inlineStyle: (s.getAttribute('style') || '').slice(0, 80),
    };
  });
});
console.log(JSON.stringify(r, null, 0));
await browser.close();
