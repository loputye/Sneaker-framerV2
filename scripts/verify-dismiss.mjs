import { chromium } from 'playwright-core';
const BASE = process.argv[2];
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-dev-shm-usage'] });
const p = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto(`${BASE}/stores`, { waitUntil: 'networkidle', timeout: 90000 });
await p.waitForTimeout(3000);
const state = () => p.evaluate(() => {
  const note = [...document.querySelectorAll('p')].find(x => /discount/i.test(x.textContent || ''));
  if (!note) return { present: false };
  const r = note.getBoundingClientRect();
  return { present: true, visible: r.height > 0 && r.top < innerHeight };
});
console.log('before:', JSON.stringify(await state()));
await p.click('[data-framer-name="Close Button"]');
await p.waitForTimeout(900);
console.log('after :', JSON.stringify(await state()));
await browser.close();
