import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(process.argv[2], { waitUntil: 'networkidle' });
await page.waitForTimeout(2500);
await page.evaluate(() => window.scrollTo(0, 3900));
await page.waitForTimeout(700);
const r = await page.evaluate(() => {
  const find = (txt) => [...document.querySelectorAll('section[data-framer-name="Brands"] p, section[data-framer-name="Brands"] h1,section[data-framer-name="Brands"] h2,section[data-framer-name="Brands"] h3,section[data-framer-name="Brands"] div')].find((e) => e.childElementCount === 0 && e.textContent.trim() === txt);
  const info = (el) => {
    if (!el) return null;
    const rc = el.getBoundingClientRect();
    const chain = [];
    let e = el;
    for (let i = 0; i < 5 && e; i++) {
      const cs = getComputedStyle(e);
      chain.push({ cls: [...e.classList].slice(0,2).join(' '), x: Math.round(e.getBoundingClientRect().x), w: Math.round(e.getBoundingClientRect().width), pl: cs.paddingLeft, tf: cs.transform.slice(0, 40) });
      e = e.parentElement;
    }
    return { x: Math.round(rc.x), y: Math.round(rc.y + scrollY), w: Math.round(rc.width), fs: getComputedStyle(el).fontSize, ff: getComputedStyle(el).fontFamily.slice(0, 30), chain };
  };
  return { orig: info(find('Original')), pct: info(find('100%')) };
});
console.log(JSON.stringify(r, null, 1));
await browser.close();
