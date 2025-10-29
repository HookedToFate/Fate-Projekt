// tests/fate.spec.ts
import { test, expect, Page } from '@playwright/test';

// Helpers to survive evolving markup. Prefer data-testid hooks if present.
async function getDrawButton(page: Page) {
  const testIdBtn = page.getByTestId('draw-btn');
  if (await testIdBtn.count()) return testIdBtn.first();

  const textCandidates = [/karte ziehen/i, /ziehen/i, /zieh/i, /draw/i, /oracle/i, /again/i];
  for (const re of textCandidates) {
    const button = page.getByRole('button', { name: re });
    if (await button.count()) return button.first();
  }
  return page.locator('button').first();
}

async function expectLoaderDuring(page: Page, action: () => Promise<void>) {
  const loader = page.getByTestId('loader');
  const before = (await loader.count()) ? await loader.isVisible().catch(() => false) : false;
  await action();
  await page.waitForTimeout(50);
  if (await loader.count()) {
    await expect(loader).toBeVisible({ timeout: 3000 });
    await expect(loader).toBeHidden({ timeout: 10000 });
  }
}

async function waitForCardResult(page: Page) {
  const card = page.getByTestId('card-face');
  const suitImg = page.getByTestId('suit-img');
  const quote = page.getByTestId('quote');

  await Promise.race([
    card.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {}),
    suitImg.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {}),
    quote.waitFor({ state: 'visible', timeout: 10000 }).catch(() => {}),
    page.locator('#root img[src$=".png"]').first().waitFor({ state: 'visible', timeout: 10000 }).catch(() => {}),
    page.locator('#root h1, #root h2, #root h3').first().waitFor({ state: 'visible', timeout: 10000 }).catch(() => {}),
  ]);

  return { card, suitImg, quote };
}

function looksLikeFortune(text: string) {
  return !!text && text.trim().length >= 6;
}

test.describe('Fate Oracle – core mechanics', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('index.html', { waitUntil: 'load' });
    await expect(page.locator('#root')).toBeVisible();
    await expect(page.locator('#veil-bg')).toHaveCount(1);
  });

  test('boot: CTA present and enabled', async ({ page }) => {
    const drawBtn = await getDrawButton(page);
    await expect(drawBtn).toBeVisible();
    await expect(drawBtn).toBeEnabled();
  });

  test('first draw: shows card, suit and quote; loader behaves', async ({ page }) => {
    const drawBtn = await getDrawButton(page);
    await expectLoaderDuring(page, () => drawBtn.click());
    const { suitImg, quote } = await waitForCardResult(page);

    const img = (await suitImg.count()) ? suitImg : page.locator('#root img[src$=".png"]').first();
    await expect(img).toBeVisible();
    const size = await img.evaluate((el: HTMLImageElement) => ({
      w: el.naturalWidth,
      h: el.naturalHeight,
      ok: !!(el.naturalWidth && el.naturalHeight),
    }));
    expect(size.ok, `Suit image seems broken: ${JSON.stringify(size)}`).toBeTruthy();

    const quoteNode = (await quote.count())
      ? quote
      : page.locator('#root [data-role="quote"], #root blockquote, #root .quote, #root p');
    const text = await quoteNode.first().innerText();
    expect(looksLikeFortune(text)).toBeTruthy();
  });

  test('draw again multiple times: no crashes, changing content over time', async ({ page }) => {
    const drawBtn = await getDrawButton(page);
    const seen = new Set<string>();

    for (let i = 0; i < 5; i++) {
      await expectLoaderDuring(page, () => drawBtn.click());
      const { suitImg, quote } = await waitForCardResult(page);
      const img = (await suitImg.count()) ? suitImg : page.locator('#root img[src$=".png"]').first();
      const src = (await img.getAttribute('src')) || '';
      const qNode = (await quote.count())
        ? quote
        : page.locator('#root [data-role="quote"], #root blockquote, #root .quote, #root p').first();
      const qText = (await qNode.innerText()).trim();
      seen.add(`${src}||${qText}`);
    }

    expect(seen.size).toBeGreaterThan(1);
  });

  test('glitch mechanic: over several draws we observe both glitch and non-glitch states', async ({ page }) => {
    const drawBtn = await getDrawButton(page);
    let sawGlitch = false;
    let sawClean = false;

    for (let i = 0; i < 12; i++) {
      await expectLoaderDuring(page, () => drawBtn.click());
      await waitForCardResult(page);

      const glitch = page.getByTestId('glitch');
      const glitchVisible = (await glitch.count())
        ? await glitch.isVisible().catch(() => false)
        : await page.locator('.glitch, [class*="glitch"]').isVisible().catch(() => false);

      if (glitchVisible) sawGlitch = true; else sawClean = true;
      if (sawGlitch && sawClean) break;
    }

    expect(sawClean).toBeTruthy();
    expect(sawGlitch).toBeTruthy();
  });

  test('deterministic seed: same seed yields identical result, different seed yields different', async ({ browser }) => {
    const ctx = await browser.newContext();

    // Seed A #1
    const pageA1 = await ctx.newPage();
    await pageA1.goto('index.html?seed=TEST-SEED-A', { waitUntil: 'load' });
    const btnA1 = await getDrawButton(pageA1);
    await expectLoaderDuring(pageA1, () => btnA1.click());
    const resA1 = await waitForCardResult(pageA1);
    const imgA1 = (await resA1.suitImg.count()) ? resA1.suitImg : pageA1.locator('#root img[src$=".png"]').first();
    const srcA1 = (await imgA1.getAttribute('src')) || '';
    const qA1 = await (await (resA1.quote.count() ? resA1.quote : pageA1.locator('#root [data-role="quote"], #root blockquote, #root .quote, #root p').first())).innerText();

    // Seed A #2
    const pageA2 = await ctx.newPage();
    await pageA2.goto('index.html?seed=TEST-SEED-A', { waitUntil: 'load' });
    const btnA2 = await getDrawButton(pageA2);
    await expectLoaderDuring(pageA2, () => btnA2.click());
    const resA2 = await waitForCardResult(pageA2);
    const imgA2 = (await resA2.suitImg.count()) ? resA2.suitImg : pageA2.locator('#root img[src$=".png"]').first();
    const srcA2 = (await imgA2.getAttribute('src')) || '';
    const qA2 = await (await (resA2.quote.count() ? resA2.quote : pageA2.locator('#root [data-role="quote"], #root blockquote, #root .quote, #root p').first())).innerText();

    expect(srcA1).toBe(srcA2);
    expect(qA1.trim()).toBe(qA2.trim());

    // Different seed
    const pageB = await ctx.newPage();
    await pageB.goto('index.html?seed=TEST-SEED-B', { waitUntil: 'load' });
    const btnB = await getDrawButton(pageB);
    await expectLoaderDuring(pageB, () => btnB.click());
    const resB = await waitForCardResult(pageB);
    const imgB = (await resB.suitImg.count()) ? resB.suitImg : pageB.locator('#root img[src$=".png"]').first();
    const srcB = (await imgB.getAttribute('src')) || '';
    const qB = await (await (resB.quote.count() ? resB.quote : pageB.locator('#root [data-role="quote"], #root blockquote, #root .quote, #root p').first())).innerText();

    expect(srcB).not.toBe(srcA1);
    expect(qB.trim()).not.toBe(qA1.trim());
  });
});

