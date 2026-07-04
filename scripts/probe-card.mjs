import { chromium } from 'playwright-core';
const [,, url] = process.argv;
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: 390, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
await page.waitForTimeout(3500);
const data = await page.evaluate(() => {
  const out = [];
  ['.framer-dg0nxu', '.framer-58erhv', '.framer-1s453pr', '.framer-1t476a3', '.framer-ehjkfm', '.framer-l2y7uw'].forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => {
      const vis = el.getClientRects().length > 0;
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      out.push({ sel, vis, w: Math.round(r.width), h: Math.round(r.height), x: Math.round(r.x), y: Math.round(r.y + scrollY), disp: cs.display, pos: cs.position, top: cs.top, left: cs.left, bottom: cs.bottom });
    });
  });
  // also dump the hero card container's children names
  const card = document.querySelector('.framer-dg0nxu');
  if (card) out.push({ kids: [...card.children].map((c) => [...c.classList].filter((k) => k.startsWith('framer-')).join(' ').slice(0, 60)) });
  return out;
});
console.log(JSON.stringify(data, null, 1));
await browser.close();
