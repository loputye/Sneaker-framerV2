// Dump geometry+opacity of every framer element in a scroll band, under the
// same conditions capture.mjs uses (freeze css + full pre-scroll + settle).
import { chromium } from 'playwright-core';
const [,, url, scrollToArg, y0Arg, y1Arg] = process.argv;
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars', '--force-device-scale-factor=1'] });
const page = await browser.newPage({ viewport: { width: 390, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
await page.waitForTimeout(4500);
await page.evaluate(async () => {
  const h = document.documentElement.scrollHeight;
  for (let y = 0; y < h; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(2500);
await page.evaluate(() => {
  document.documentElement.dataset.fxFreeze = '1';
  const st = document.createElement('style');
  st.textContent = `.framer-695nz-container { transform: none !important; } .framer-qyuvuf { transform: translateX(-50%) !important; opacity: 1 !important; } #__framer-badge-container, .__framer-badge, [name="framer-badge"] { display: none !important; }`;
  document.head.appendChild(st);
});
const scrollTo = Number(scrollToArg), y0 = Number(y0Arg), y1 = Number(y1Arg);
await page.evaluate((y) => window.scrollTo(0, y), scrollTo);
await page.waitForTimeout(900);
const data = await page.evaluate(([b0, b1]) => {
  const out = [];
  document.querySelectorAll('*').forEach((el) => {
    const cls = [...el.classList].filter((c) => c.startsWith('framer-') && !c.startsWith('framer-v-') && !c.startsWith('framer-text') && !c.startsWith('framer-styles')).join(' ');
    if (!cls) return;
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height) return;
    if (r.bottom < b0 || r.top > b1) return;
    const cs = getComputedStyle(el);
    out.push({ cls: cls.slice(0, 44), tag: el.tagName.slice(0, 4), w: +r.width.toFixed(1), h: +r.height.toFixed(1), x: +r.x.toFixed(1), y: +r.y.toFixed(1), op: +(+cs.opacity).toFixed(2), tf: cs.transform === 'none' ? '' : cs.transform });
  });
  return out;
}, [y0, y1]);
console.log(JSON.stringify(data));
await browser.close();
