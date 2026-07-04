// Capture aligned per-section screenshots of a URL at a given viewport.
import { chromium } from 'playwright-core';

const [,, url, outPrefix, widthArg] = process.argv;
const width = Number(widthArg || 1440);
const height = 900;

const browser = await chromium.launch({
  executablePath: '/usr/bin/google-chrome',
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars', '--force-device-scale-factor=1', '--disable-lcd-text'],
});
const page = await browser.newPage({ viewport: { width, height } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
await page.waitForTimeout(4500);
// settle lazy images by pre-scrolling the whole page
await page.evaluate(async () => {
  const h = document.documentElement.scrollHeight;
  for (let y = 0; y < h; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(2500);

// Deterministic captures: pin the time-based loops (floating shoe bob and
// shoe-shadow pulse) at their t=0 rest phase on BOTH pages. Stylesheet
// !important beats the runtime's plain inline writes; the clone's effects
// engine honours the fx-freeze flag for the styles it owns.
await page.evaluate(() => {
  document.documentElement.dataset.fxFreeze = '1';
  const st = document.createElement('style');
  st.textContent = `
    .framer-695nz-container { transform: none !important; }
    .framer-qyuvuf { transform: translateX(-50%) !important; opacity: 1 !important; }
    /* footer letters are scroll-linked with spring smoothing on the live
       site; pin them at rest on BOTH pages for deterministic frames */
    footer svg[data-framer-component-type="RichTextContainer"] { transform: none !important; }
    #__framer-badge-container, .__framer-badge, [name="framer-badge"] { display: none !important; }
  `;
  document.head.appendChild(st);
});

const sections = await page.evaluate(() => {
  const secs = [];
  const names = new Set();
  document.querySelectorAll('section[data-framer-name], footer, [data-framer-name="Best Sellers"], [data-framer-name="Categories"], [data-framer-name="The Approach"], [data-framer-name="FAQ\'s"]').forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.height < 50 || r.width < 300) return;
    let nm = el.getAttribute('data-framer-name') || el.tagName.toLowerCase();
    if (nm === 'Variant 1') nm = 'Hero';
    if (el.tagName === 'FOOTER') nm = 'Footer';
    if (names.has(nm)) return;
    names.add(nm);
    secs.push({ name: nm.replace(/[^a-z0-9]+/gi, '-').toLowerCase(), top: Math.round(r.top + scrollY), h: Math.round(r.height) });
  });
  return secs.sort((a, b) => a.top - b.top);
});
console.log(JSON.stringify(sections));

// full page
await page.screenshot({ path: `${outPrefix}-full.png`, fullPage: true });

// per-section: scroll so section is at viewport top (or centered if shorter)
let i = 0;
for (const s of sections) {
  i++;
  const target = Math.max(0, s.top - Math.max(0, Math.round((height - s.h) / 2)));
  await page.evaluate((y) => window.scrollTo(0, y), target);
  await page.waitForTimeout(900);
  await page.screenshot({ path: `${outPrefix}-s${String(i).padStart(2, '0')}-${s.name}.png` });
}
await browser.close();
