import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-dev-shm-usage'] });
for (const width of [1240, 1440, 1920, 1000, 400]) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  await page.goto('https://sneako.framer.website/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500);
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await page.waitForTimeout(1200);
  const r = await page.evaluate(() => {
    const foot = document.querySelector('footer');
    const letters = [...foot.querySelectorAll('[style*="--framer-font-size"]')]
      .filter((el) => /Ranchers/.test(el.getAttribute('style') || ''))
      .filter((el) => el.getBoundingClientRect().height > 10);
    return {
      containerW: Math.round(foot.getBoundingClientRect().width),
      letters: letters.slice(0, 8).map((el) => {
        const st = el.getAttribute('style') || '';
        const m = st.match(/--framer-font-size:\s*([\d.]+)px/);
        return { txt: el.textContent.trim().slice(0, 2), fs: m ? Math.round(Number(m[1]) * 10) / 10 : null, h: Math.round(el.getBoundingClientRect().height), w: Math.round(el.getBoundingClientRect().width) };
      }),
    };
  });
  console.log('W=' + width, JSON.stringify(r));
  await page.close();
}
await browser.close();
