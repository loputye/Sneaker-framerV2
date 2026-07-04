import { chromium } from 'playwright-core';
const [,, url, widthArg] = process.argv;
const width = Number(widthArg);
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
await page.waitForTimeout(3500);
const res = await page.evaluate(async () => {
  const plane = document.querySelector('.framer-1805o0f');
  const sec = [...document.querySelectorAll('section[data-framer-name], [data-framer-name="Shipping"]')].find((s) => s.getAttribute('data-framer-name') === 'Shipping');
  if (!plane || !sec) return { err: 'not found' };
  const sr = sec.getBoundingClientRect();
  const secTop = sr.top + scrollY, secH = sr.height;
  const vh = innerHeight;
  const out = { secTop, secH, vh, pts: [] };
  const start = Math.max(0, secTop - vh), end = secTop + secH;
  for (let i = 0; i <= 10; i++) {
    const y = start + (i / 10) * (end - start);
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 350));
    const t = getComputedStyle(plane).transform;
    const m = /matrix\(([^)]+)\)/.exec(t);
    const tx = m ? Number(m[1].split(',')[4]) : 0;
    out.pts.push({ y: Math.round(y), prog: +(i / 10).toFixed(2), tx: Math.round(tx) });
  }
  return out;
});
console.log(width, JSON.stringify(res));
await browser.close();
