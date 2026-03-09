import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should load in English', async ({ page }) => {
    await page.goto('/en');
    
    // Check if hero heading exists (since we don't know the exact text, we just check for h1)
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    
    // Ensure English text from navigation or badge is present
    await expect(page.locator('text=Currently taking clients')).toBeVisible();
  });

  test('should load in Hebrew', async ({ page }) => {
    await page.goto('/he');
    
    // Check if hero heading exists
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    
    // Ensure Hebrew text from badge is present
    await expect(page.locator('text=זמין לפרויקטים חדשים')).toBeVisible();
  });
});
