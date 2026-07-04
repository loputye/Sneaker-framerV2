import { chromium } from 'playwright-core';
const url = process.argv[2];
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-dev-shm-usage'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(3000);

// --- FAQ accordion ---
const faq = page.locator('text=Do you ship internationally?').first();
await faq.scrollIntoViewIfNeeded();
await page.waitForTimeout(600);
const answerSel = 'text=Yep — we ship worldwide';
const before = await page.locator(answerSel).first().isVisible().catch(() => false);
await faq.click();
await page.waitForTimeout(900);
const after = await page.locator(answerSel).first().isVisible().catch(() => false);
// re-click to close, then click second row
const q2 = page.locator('text=How do I find the right size?').first();
await q2.click();
await page.waitForTimeout(700);
const faqShot = '/home/shots/' + (url.includes('local') ? 'clone' : 'live') + '-faq-open.png';
await page.screenshot({ path: faqShot });

// --- product card hover ---
const card = page.locator('[data-framer-name="Best Sellers"] img').first();
await card.scrollIntoViewIfNeeded();
await page.waitForTimeout(800);
const imgBefore = await page.evaluate(() => {
  const sec = document.querySelector('[data-framer-name="Best Sellers"]');
  const img = sec?.querySelector('img');
  return img?.currentSrc?.split('/').pop()?.slice(0, 24);
});
await card.hover();
await page.waitForTimeout(900);
const imgAfter = await page.evaluate(() => {
  const sec = document.querySelector('[data-framer-name="Best Sellers"]');
  const img = sec?.querySelector('img');
  return img?.currentSrc?.split('/').pop()?.slice(0, 24);
});
const hoverShot = faqShot.replace('faq-open', 'card-hover');
await page.screenshot({ path: hoverShot });

console.log(JSON.stringify({ faqAnswerBefore: before, faqAnswerAfter: after, imgBefore, imgAfter, hoverChanged: imgBefore !== imgAfter }, null, 1));
await browser.close();
