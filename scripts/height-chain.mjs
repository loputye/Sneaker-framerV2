import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(process.argv[2], { waitUntil: 'networkidle' });
await page.waitForTimeout(2000);
const r = await page.evaluate(() => {
  const hero = document.querySelector('section[data-framer-name="Hero"], section[data-framer-name="Variant 1"]');
  const out = [];
  const walk = (el, d) => {
    if (!el || d > 4) return;
    const cs = getComputedStyle(el);
    const rc = el.getBoundingClientRect();
    out.push({ d, cls: [...el.classList].filter(c=>c.startsWith('framer-')).slice(0,2).join(' '), name: el.getAttribute('data-framer-name'),
      h: Math.round(rc.height), cssH: cs.height, minH: cs.minHeight, inline: (el.getAttribute('style')||'').slice(0,120) });
    [...el.children].forEach((c) => walk(c, d + 1));
  };
  walk(hero, 0);
  return out.filter(x => x.h > 500).slice(0, 12);
});
console.log(JSON.stringify(r, null, 1));
await browser.close();
