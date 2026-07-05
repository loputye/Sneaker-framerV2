import { chromium } from 'playwright-core';
const BASE = process.argv[2];
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-dev-shm-usage'] });
const out = [];

// shoes: read real product names, search the first word of one
{
  const p = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto(`${BASE}/shoes`, { waitUntil: 'networkidle', timeout: 90000 });
  await p.waitForTimeout(3500);
  const names = await p.evaluate(() => [...document.querySelectorAll('main p')].map(e => (e.textContent||'').trim()).filter(t => t.length > 3 && t.length < 40 && !/\$|filter|search/i.test(t)).slice(0, 12));
  out.push('shoes names sample: ' + JSON.stringify(names.slice(0, 6)));
  const word = (names.find(n => / /.test(n)) || names[0] || 'air').split(' ')[0];
  const inputs = await p.evaluate(() => [...document.querySelectorAll('input')].map(i => ({ ph: i.placeholder, cls: (i.className||'').toString().slice(0,20) })));
  out.push('shoes inputs: ' + JSON.stringify(inputs));
  const input = p.locator('input').first();
  await input.click();
  await input.pressSequentially(word.toLowerCase(), { delay: 40 });
  await p.waitForTimeout(1400);
  const vis = await p.evaluate((w) => [...document.querySelectorAll('main p')].filter(e => new RegExp(w, 'i').test(e.textContent || '')).length, word);
  out.push(`shoes search "${word}": visible matches=${vis}`);
  await p.close();
}
// magazine: search "sneaker"
{
  const p = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto(`${BASE}/magazine`, { waitUntil: 'networkidle', timeout: 90000 });
  await p.waitForTimeout(3500);
  const c0 = await p.evaluate(() => document.querySelectorAll('section[data-framer-name="All publishes"] img').length);
  const input = p.locator('input').first();
  await input.click();
  await input.pressSequentially('sneaker', { delay: 40 });
  await p.waitForTimeout(1400);
  const c1 = await p.evaluate(() => document.querySelectorAll('section[data-framer-name="All publishes"] img').length);
  out.push(`magazine "sneaker": ${c0} -> ${c1}`);
  await p.close();
}
// stores: read store names, search one
{
  const p = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto(`${BASE}/stores`, { waitUntil: 'networkidle', timeout: 90000 });
  await p.waitForTimeout(3500);
  const names = await p.evaluate(() => [...document.querySelectorAll('p,h3,h4')].map(e => (e.textContent||'').trim()).filter(t => /sneaks|store/i.test(t) && t.length < 40).slice(0, 8));
  out.push('stores names: ' + JSON.stringify(names.slice(0,5)));
  const rows0 = await p.evaluate(() => document.querySelectorAll('[data-framer-name*="Store"], a[href*="maps"]').length);
  const input = p.locator('input').first();
  await input.click();
  await input.pressSequentially('sneaks', { delay: 40 });
  await p.waitForTimeout(1400);
  const rows1 = await p.evaluate(() => document.querySelectorAll('[data-framer-name*="Store"], a[href*="maps"]').length);
  out.push(`stores "sneaks": rows ${rows0} -> ${rows1}`);
  await p.close();
}
// footnote: find named close control
{
  const p = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto(`${BASE}/stores`, { waitUntil: 'networkidle', timeout: 90000 });
  await p.waitForTimeout(3000);
  const names = await p.evaluate(() => {
    const note = [...document.querySelectorAll('p')].find(x => /discount/i.test(x.textContent || ''));
    const root = note?.closest('[class*="framer-SkZxX"]');
    return root ? [...root.querySelectorAll('[data-framer-name]')].map(e => e.getAttribute('data-framer-name')) : [];
  });
  out.push('footnote parts: ' + JSON.stringify(names));
  await p.close();
}
console.log(out.join('\n'));
await browser.close();
