import { chromium } from 'playwright-core';
const [,, url] = process.argv;
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: 390, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
await page.waitForTimeout(4000);
const res = await page.evaluate(async () => {
  const read = () => {
    const f = [...document.querySelectorAll('footer')].find((x) => x.getClientRects().length);
    if (!f) return null;
    return [...f.querySelectorAll('svg')].slice(0, 6).map((s) => {
      const m = /matrix\(([^)]+)\)/.exec(getComputedStyle(s).transform);
      return m ? Math.round(+m[1].split(',')[5]) : 0;
    });
  };
  const fTop = (() => { const f = [...document.querySelectorAll('footer')].find((x) => x.getClientRects().length); const r = f.getBoundingClientRect(); return r.top + scrollY; })();
  const out = { fTop };
  // 1) scroll footer fully into view, settle
  window.scrollTo(0, fTop - 100);
  await new Promise((r) => setTimeout(r, 1600));
  out.settled = read();
  // 2) scroll far away
  window.scrollTo(0, 0);
  await new Promise((r) => setTimeout(r, 800));
  out.away = read();
  // 3) scroll so only 50px of footer pokes in (FAQ-frame condition), settle 900ms
  window.scrollTo(0, fTop - 850);
  await new Promise((r) => setTimeout(r, 900));
  out.peek900 = read();
  await new Promise((r) => setTimeout(r, 1500));
  out.peek2400 = read();
  return out;
});
console.log(JSON.stringify(res));
await browser.close();
