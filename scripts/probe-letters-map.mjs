import { chromium } from 'playwright-core';
const [,, url, w] = process.argv;
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: Number(w), height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
await page.waitForTimeout(4000);
const res = await page.evaluate(async () => {
  const f = [...document.querySelectorAll('footer')].find((x) => x.getClientRects().length);
  const svgs = [...f.querySelectorAll('svg')].filter((s) => s.querySelector('.framer-fit-text'));
  const fTop = f.getBoundingClientRect().top + scrollY;
  const read = () => svgs.map((s) => {
    const m = /matrix\(([^)]+)\)/.exec(getComputedStyle(s).transform);
    return m ? Math.round(+m[1].split(',')[5]) : 0;
  });
  const tops = svgs.map((s) => Math.round(s.getBoundingClientRect().top + scrollY - (/matrix/.test(getComputedStyle(s).transform) ? +(/matrix\(([^)]+)\)/.exec(getComputedStyle(s).transform))[1].split(',')[5] : 0)));
  const out = { fTop: Math.round(fTop), tops, samples: [] };
  for (let k = 1000; k >= 0; k -= 100) {
    window.scrollTo(0, fTop - k);
    await new Promise((r) => setTimeout(r, 700));
    out.samples.push({ dy: k, off: read() });
  }
  return out;
});
console.log(JSON.stringify(res));
await browser.close();
