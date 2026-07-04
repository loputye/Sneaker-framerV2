import { chromium } from 'playwright-core';
const [,, url, w] = process.argv;
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: Number(w || 390), height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
await page.waitForTimeout(3500);
const secs = await page.evaluate(() => {
  const out = [];
  document.querySelectorAll('section[data-framer-name], footer').forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.height < 50) return;
    out.push({ nm: (el.getAttribute('data-framer-name') || 'footer').slice(0, 22), top: Math.round(r.top + scrollY), h: Math.round(r.height) });
  });
  return out.sort((a, b) => a.top - b.top);
});
console.log(JSON.stringify(secs));
await browser.close();
