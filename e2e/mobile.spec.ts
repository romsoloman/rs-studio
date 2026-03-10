import { test, expect } from '@playwright/test';
test.describe('Mobile Viewport', () => {
  // Set the viewport to typical 375px width (e.g. iPhone SE/X/12/13 Mini width)
  test.use({ viewport: { width: 375, height: 667 } });

  test('home page has no horizontal scroll', async ({ page }) => {
    await page.goto('/en');
    
    // Evaluate if the scrollWidth exceeds the clientWidth of the document element
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });

    expect(hasHorizontalScroll).toBe(false);
  });

  test('portfolio page has no horizontal scroll', async ({ page }) => {
    await page.goto('/en/portfolio');
    
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });

    expect(hasHorizontalScroll).toBe(false);
  });

  test('blog page has no horizontal scroll', async ({ page }) => {
    await page.goto('/en/blog');
    
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });

    expect(hasHorizontalScroll).toBe(false);
  });

  test('contact page has no horizontal scroll', async ({ page }) => {
    await page.goto('/en/contact');
    
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });

    expect(hasHorizontalScroll).toBe(false);
  });
});
