import { chromium } from 'playwright-core';
const url = process.argv[2];
const SELS = {
  title: '.framer-f0rlmn',
  shoe: '.framer-695nz-container',
  shadowHero: '.framer-qyuvuf',
  coffeeShoe: '.framer-1i8aiwv',
  legendsShadow: '.framer-gkb3ke',
  plane: '.framer-1ycssno',
  box1: '.framer-19bpks7',
  box2: '.framer-1ocq9fk',
  box3: '.framer-1e7k166',
  box4: '.framer-1ryxzvp',
  approachShoe: '.framer-yz5b6m',
};
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(4000);
const heights = await page.evaluate(() => ({
  scrollH: document.documentElement.scrollHeight,
  sections: [...document.querySelectorAll('section[data-framer-name]')].map((s) => [s.getAttribute('data-framer-name'), Math.round(s.getBoundingClientRect().top + scrollY), Math.round(s.getBoundingClientRect().height)]),
}));
console.log('PAGE', JSON.stringify(heights));
for (const y of [0, 400, 900, 1400, 1900, 2400, 2900, 3400]) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(700);
  const r = await page.evaluate((sels) => {
    const out = {};
    for (const [k, sel] of Object.entries(sels)) {
      const el = document.querySelector(sel);
      if (!el) { out[k] = null; continue; }
      const cs = getComputedStyle(el);
      out[k] = cs.opacity + '|' + cs.transform;
    }
    return out;
  }, SELS);
  console.log('Y=' + y, JSON.stringify(r));
}
await browser.close();
