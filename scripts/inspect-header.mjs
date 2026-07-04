import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(process.argv[2] || 'http://localhost:5173/?nofx', { waitUntil: 'networkidle' });
await page.waitForTimeout(2500);
const r = await page.evaluate(() => {
  const els = [...document.querySelectorAll('[data-framer-name="Header"], [data-framer-name="Nav"], header, [data-framer-name="Menu"]')];
  const hero = document.querySelector('section[data-framer-name="Variant 1"], section[data-framer-name="Hero"]');
  const heroCS = hero ? getComputedStyle(hero) : null;
  return {
    headers: els.map((el) => {
      const cs = getComputedStyle(el);
      const rc = el.getBoundingClientRect();
      return { tag: el.tagName, cls: el.className.toString().slice(0, 90), pos: cs.position, disp: cs.display,
        op: cs.opacity, rect: [Math.round(rc.x), Math.round(rc.y), Math.round(rc.width), Math.round(rc.height)], z: cs.zIndex,
        parentName: el.parentElement?.getAttribute('data-framer-name'), parentCls: (el.parentElement?.className.toString()||'').slice(0,60) };
    }),
    heroH: hero ? { h: hero.getBoundingClientRect().height, minH: heroCS.minHeight, height: heroCS.height, cls: hero.className.toString().slice(0,80) } : null,
    fixedEls: [...document.querySelectorAll('div,nav')].filter((e) => getComputedStyle(e).position === 'fixed').slice(0, 8).map((e) => [e.className.toString().slice(0, 60), e.getAttribute('data-framer-name'), Math.round(e.getBoundingClientRect().height)]),
  };
});
console.log(JSON.stringify(r, null, 1));
await browser.close();
