import { chromium } from 'playwright-core';
const [,, url] = process.argv;
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-dev-shm-usage', '--force-device-scale-factor=1'] });
const page = await browser.newPage({ viewport: { width: 390, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
await page.waitForTimeout(4000);
const data = await page.evaluate(() => {
  const rect = (el) => { const r = el.getBoundingClientRect(); return { w: +r.width.toFixed(1), h: +r.height.toFixed(1), x: +r.x.toFixed(1), y: +(r.y + scrollY).toFixed(1) }; };
  const out = {};
  // heading = h1 or biggest text in hero
  const h1 = document.querySelector('.framer-f0rlmn h1, .framer-f0rlmn [data-framer-component-type="RichTextContainer"]');
  if (h1) { out.heading = rect(h1); out.headingFS = getComputedStyle(h1.querySelector('.framer-text') || h1).fontSize; }
  const grp = document.querySelector('.framer-f0rlmn');
  if (grp) { out.group = rect(grp); const cs = getComputedStyle(grp); out.groupStyle = { top: cs.top, gap: cs.gap, tf: cs.transform.slice(0, 60) }; }
  // Buy now button: find by text
  const buy = [...document.querySelectorAll('div,a,button')].filter((e) => e.textContent.trim() === 'Buy now' && e.getClientRects().length).pop();
  if (buy) out.buy = rect(buy);
  // swatch dots: small round divs — find container with 3 kids of ~14-20px circles near podium
  const dots = [...document.querySelectorAll('div')].filter((e) => { const r = e.getBoundingClientRect(); return r.width > 40 && r.width < 130 && r.height > 18 && r.height < 46 && e.children.length >= 3 && [...e.children].every((c) => { const cr = c.getBoundingClientRect(); return cr.width < 40 && cr.width > 6; }); });
  out.dotCandidates = dots.slice(0, 6).map((e) => ({ cls: [...e.classList].join(' ').slice(0, 40), ...rect(e) }));
  // podium
  const pod = document.querySelector('.framer-1oo7nd9');
  if (pod) out.podium = rect(pod);
  const shoe = document.querySelector('.framer-695nz-container');
  if (shoe) out.shoe = rect(shoe);
  // shipping bottom: all imgs in illustration with y
  const illu = document.querySelector('.framer-1ycssno');
  if (illu) out.illu = rect(illu);
  const plane = document.querySelector('.framer-1805o0f');
  if (plane) { out.plane = rect(plane); out.planeTf = getComputedStyle(plane).transform.slice(0, 60); }
  const ship = document.querySelector('[data-framer-name="Shipping"]');
  if (ship) out.ship = rect(ship);
  return out;
});
console.log(JSON.stringify(data, null, 1));
await browser.close();
