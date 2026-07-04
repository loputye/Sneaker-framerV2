import { chromium } from 'playwright-core';
const [,, url, w] = process.argv;
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: Number(w || 390), height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
await page.waitForTimeout(4000);
const res = await page.evaluate(async () => {
  const el = document.querySelector('.framer-qvqw2a');
  if (!el) return { err: 'none' };
  const read = () => { const cs = getComputedStyle(el); const m = /matrix\(([^)]+)\)/.exec(cs.transform); return { tx: m ? Math.round(+m[1].split(',')[4]) : 0, op: +(+cs.opacity).toFixed(2) }; };
  const out = { inline: el.getAttribute('style')?.slice(0, 160), time: [], scroll: [] };
  window.scrollTo(0, 0);
  for (let i = 0; i < 8; i++) { await new Promise((r) => setTimeout(r, 400)); out.time.push(read()); }
  for (const y of [0, 200, 400, 600, 900, 1200]) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 500));
    out.scroll.push({ y, ...read() });
  }
  return out;
});
console.log(JSON.stringify(res));
await browser.close();
