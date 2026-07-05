import { chromium } from 'playwright-core';
const [,, url] = process.argv;
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
await page.waitForTimeout(3500);
const tops = await page.evaluate(() => [...document.querySelectorAll('[id$="-point"], [id$="point"]')].filter(e=>e.className.includes('framer')).map(e => ({ id: e.id, top: Math.round(e.getBoundingClientRect().top + scrollY) })));
console.log('blocks:', JSON.stringify(tops));
for (let y = 700; y <= 3300; y += 260) {
  await page.evaluate((y) => window.scrollTo(0, y), y);
  await page.waitForTimeout(450);
  const act = await page.evaluate(() => {
    const a = [...document.querySelectorAll('a[data-framer-name="Active"], a.framer-v-mvn0tj')].filter(x=>x.offsetParent);
    return a.map(x => (x.textContent||'').slice(0,26));
  });
  console.log(y, JSON.stringify(act));
}
await browser.close();
