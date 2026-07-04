import { chromium } from 'playwright-core';
const [,, url, widthArg] = process.argv;
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: Number(widthArg), height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
await page.waitForTimeout(3500);
await page.evaluate(async () => { const h = document.documentElement.scrollHeight; for (let y = 0; y < h; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); } });
await page.waitForTimeout(1200);
const data = await page.evaluate(() => {
  const out = [];
  ['.framer-1805o0f', '.framer-19bpks7', '.framer-1ocq9fk', '.framer-1e7k166', '.framer-1ryxzvp', '.framer-13fxww1', '.framer-92cbqa', '.framer-1ycssno'].forEach((sel) => {
    const el = document.querySelector(sel);
    if (!el || !el.getClientRects().length) { out.push({ sel, missing: true }); return; }
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    out.push({ sel, w: Math.round(r.width), h: Math.round(r.height), x: Math.round(r.x), top: cs.top, left: cs.left, tf: cs.transform === 'none' ? '' : cs.transform.slice(0, 40), pos: cs.position });
  });
  return out;
});
console.log(JSON.stringify(data, null, 1));
await browser.close();
