import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(process.argv[2], { waitUntil: 'networkidle' });
await page.waitForTimeout(2500);
const r = await page.evaluate(() => {
  const f = document.querySelector('footer');
  const all = [...document.querySelectorAll('[data-framer-name]')].slice(-14).map((e) => [e.tagName, e.getAttribute('data-framer-name'), Math.round(e.getBoundingClientRect().height)]);
  return { footerTag: f ? [f.className.toString().slice(0, 70), Math.round(f.getBoundingClientRect().height), Math.round(f.getBoundingClientRect().top + scrollY)] : null, lastNamed: all };
});
console.log(JSON.stringify(r, null, 1));
await browser.close();
