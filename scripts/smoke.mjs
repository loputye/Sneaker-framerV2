// Smoke test: load the clone, collect console output, take a screenshot.
import { chromium } from 'playwright-core';

const url = process.argv[2] || 'http://localhost:5173/';
const out = process.argv[3] || '/home/shots/smoke.png';

const browser = await chromium.launch({
  executablePath: '/usr/bin/google-chrome',
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars', '--force-device-scale-factor=1'],
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const messages = [];
page.on('console', (m) => messages.push(`[${m.type()}] ${m.text().slice(0, 300)}`));
page.on('pageerror', (e) => messages.push(`[PAGEERROR] ${String(e).slice(0, 500)}`));
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch((e) => messages.push('goto: ' + e.message));
await page.waitForTimeout(3500);
await page.screenshot({ path: out });
const dims = await page.evaluate(() => ({
  scrollH: document.documentElement.scrollHeight,
  bodyChildren: document.body.children.length,
  fonts: {
    interVar: document.fonts.check('14px "Inter Variable"'),
    inter: document.fonts.check('14px "Inter"'),
    ranchers: document.fonts.check('14px "Ranchers"'),
  },
  sections: [...document.querySelectorAll('section[data-framer-name]')].map((s) => [
    s.getAttribute('data-framer-name'),
    Math.round(s.getBoundingClientRect().height),
  ]),
}));
console.log(JSON.stringify(dims, null, 1));
const seen = new Set();
for (const m of messages) {
  const key = m.slice(0, 120);
  if (seen.has(key)) continue;
  seen.add(key);
  console.log(m);
}
await browser.close();
