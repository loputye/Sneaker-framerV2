import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
await page.waitForTimeout(3000);
const info = await page.evaluate(() => {
  const out = [];
  document.querySelectorAll('[data-framer-appear-id]').forEach((el) => {
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    out.push({
      id: el.getAttribute('data-framer-appear-id'),
      cls: el.className.toString().split(' ').filter(c=>c.startsWith('framer-')).slice(0,3).join(' '),
      name: el.getAttribute('data-framer-name'),
      opacity: cs.opacity,
      transform: cs.transform.slice(0, 60),
      top: Math.round(r.top + scrollY), h: Math.round(r.height),
      inlineTransform: (el.style.transform||'').slice(0,60),
      willChange: cs.willChange,
    });
  });
  return out;
});
console.table ? console.log(JSON.stringify(info, null, 1)) : null;
await browser.close();
