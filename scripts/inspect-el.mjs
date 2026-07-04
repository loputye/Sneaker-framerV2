import { chromium } from 'playwright-core';
const [,, url, sel] = process.argv;
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(2500);
const r = await page.evaluate((s) => {
  const el = document.querySelector(s);
  if (!el) return null;
  const dump = (e, d) => {
    const cs = getComputedStyle(e);
    const rc = e.getBoundingClientRect();
    const o = { d, tag: e.tagName, cls: [...(e.classList||[])].slice(0,3).join(' '), h: Math.round(rc.height), w: Math.round(rc.width),
      ar: cs.aspectRatio, disp: cs.display, pos: cs.position, of: cs.objectFit, inline: (e.getAttribute('style')||'').slice(0,140) };
    return [o, ...[...e.children].flatMap((c) => dump(c, d+1))];
  };
  return dump(el, 0);
}, sel);
console.log(JSON.stringify(r, null, 1));
await browser.close();
