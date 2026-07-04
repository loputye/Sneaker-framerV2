import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(process.argv[2] || 'https://sneako.framer.website/', { waitUntil: 'networkidle' });
await page.waitForTimeout(2200);
await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
await page.waitForTimeout(1000);
const r = await page.evaluate(() => {
  const foot = document.querySelector('footer');
  const letter = [...foot.querySelectorAll('[style*="Ranchers"]')].find((el) => el.textContent.trim().length <= 2 && el.getBoundingClientRect().height > 10);
  if (!letter) return 'no letter';
  const chain = [];
  let e = letter;
  for (let i = 0; i < 7 && e && e !== foot.parentElement; i++) {
    const cs = getComputedStyle(e);
    chain.push({ tag: e.tagName, cls: [...e.classList].slice(0, 3).join(' '), fs: cs.fontSize, tf: cs.transform.slice(0, 44), w: Math.round(e.getBoundingClientRect().width), h: Math.round(e.getBoundingClientRect().height), disp: cs.display, inlineFS: (e.getAttribute('style')||'').match(/font-size:[^;]*/)?.[0]?.slice(0,60) });
    e = e.parentElement;
  }
  const p = letter.querySelector('p') || letter;
  return { chain, pFS: getComputedStyle(p).fontSize, pInline: (p.getAttribute('style') || '').slice(0, 100) };
});
console.log(JSON.stringify(r, null, 1));
await browser.close();
