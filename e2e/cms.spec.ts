import { test, expect } from '@playwright/test';

test.describe('Sanity CMS Content', () => {
  test('loads on portfolio page', async ({ page }) => {
    await page.goto('/en/portfolio');
    
    // Assuming portfolio items are rendered. We verify the page didn't throw a 500
    // and that some heading exists signaling the page rendered.
    // Depending on Sanity integration it might have <article> or specific classes.
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    
    // Optional: wait for a potential element that represents a Sanity document
    // If no articles exist, we just ensure no server error occurred by checking title presence
  });

  test('loads on blog page', async ({ page }) => {
    await page.goto('/en/blog');
    
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    
    // Expect at least the header to show up, meaning CMS or page layout didn't crash
  });
});
