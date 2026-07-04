import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const messages = [];
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') messages.push(`[${m.type()}] ${m.text().slice(0, 160)}`); });
page.on('pageerror', (e) => messages.push(`[PAGEERROR] ${String(e).slice(0, 300)}`));
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
await page.evaluate(async () => { const h = document.documentElement.scrollHeight; for (let y = 0; y < h; y += 700) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 80)); } });
await page.waitForTimeout(1500);
const fonts = await page.evaluate(() => ({
  interVar: document.fonts.check('14px "Inter Variable"'),
  inter: document.fonts.check('14px "Inter"'),
  ranchers: document.fonts.check('14px "Ranchers"'),
}));
const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
const seen = new Set(); const uniq = [];
for (const m of messages) { const k = m.slice(0, 100); if (!seen.has(k)) { seen.add(k); uniq.push(m); } }
console.log(JSON.stringify({ fonts, horizontalOverflow: overflow, warnings: uniq }, null, 1));
await browser.close();
