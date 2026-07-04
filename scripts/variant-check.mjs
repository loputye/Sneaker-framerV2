import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: Number(process.argv[3] || 390), height: 844 } });
await page.goto(process.argv[2], { waitUntil: 'networkidle' });
await page.waitForTimeout(3000);
const r = await page.evaluate(() => {
  const pick = (sel) => {
    const el = document.querySelector(sel);
    return el ? [...el.classList].filter((c) => c.startsWith('framer-v-') || c === 'framer-9Yclq' || /^framer-[a-z0-9]{5,8}$/.test(c)).join(' ') : null;
  };
  const main = document.querySelector('[data-framer-name="Main"], [data-framer-name="Desktop"], [data-framer-name="Phone"], [data-framer-name="Tablet"]');
  const hero = document.querySelector('section[data-framer-name="Variant 1"], section[data-framer-name="Hero"]');
  const heroInner = hero?.querySelector('[data-framer-name="Container"]');
  const shoe = document.querySelector('.framer-695nz-container');
  const shoeRect = shoe?.getBoundingClientRect();
  return {
    mainName: main?.getAttribute('data-framer-name'),
    mainVariantClasses: main ? [...main.classList].filter((c) => c.startsWith('framer-v-')).join(' ') : null,
    heroClasses: hero?.className.toString().slice(0, 120),
    shoeSize: shoeRect ? [Math.round(shoeRect.width), Math.round(shoeRect.height)] : null,
    beigeDetailsVisible: (() => {
      const els = [...document.querySelectorAll('p, h3, div')].filter((e) => e.childElementCount === 0 && /comfort elegance/i.test(e.textContent || ''));
      return els.some((e) => { const r2 = e.getBoundingClientRect(); const cs = getComputedStyle(e); return r2.width > 0 && cs.display !== 'none' && Number(cs.opacity) > 0.1; });
    })(),
  };
});
console.log(JSON.stringify(r, null, 1));
await browser.close();
