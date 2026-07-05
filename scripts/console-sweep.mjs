import { chromium } from 'playwright-core';
const BASE = process.argv[2] || 'http://localhost:4173';
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-dev-shm-usage'] });
let failures = 0;
for (const pg of ['about','shoes','stores','shipping','magazine','returns']) {
  for (const w of [1440, 390]) {
    const p = await browser.newPage({ viewport: { width: w, height: 900 } });
    const errs = [];
    p.on('console', (m) => { if (m.type() === 'error') errs.push(m.text().slice(0, 120)); });
    p.on('pageerror', (e) => errs.push('PAGEERROR: ' + String(e).slice(0, 120)));
    await p.goto(`${BASE}/${pg}`, { waitUntil: 'networkidle', timeout: 90000 });
    await p.evaluate(async () => {
      const h = document.documentElement.scrollHeight;
      for (let y = 0; y < h; y += 700) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
    });
    await p.waitForTimeout(1200);
    const uniq = [...new Set(errs)];
    if (uniq.length) { failures++; console.log(`ERRORS ${pg}@${w}:`); uniq.slice(0, 5).forEach((e) => console.log('   ', e)); }
    else console.log(`clean  ${pg}@${w}`);
    await p.close();
  }
}
console.log(failures === 0 ? 'ALL CLEAN' : `${failures} combos with errors`);
await browser.close();
