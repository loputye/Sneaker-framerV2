import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(process.argv[2], { waitUntil: 'networkidle' });
await page.waitForTimeout(2500);
const r = await page.evaluate(() => {
  const out = {};
  const info = (sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const cs = getComputedStyle(el);
    return { gap: cs.gap, mt: cs.marginTop, mb: cs.marginBottom, h: Math.round(el.getBoundingClientRect().height), pt: cs.paddingTop, pb: cs.paddingBottom };
  };
  out.showShadow = info('.framer-1i8aiwv');
  out.figure = info('.framer-1cxydv4');
  out.shadow = info('.framer-gkb3ke');
  out.approachHdr = info('[data-framer-name="The Approach"]');
  // the approach illustration + shoe
  out.approachShoe = info('.framer-yz5b6m');
  out.approachIll = info('.framer-1oo7nd9');
  return out;
});
console.log(JSON.stringify(r, null, 1));
await browser.close();
