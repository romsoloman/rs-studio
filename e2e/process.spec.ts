import { test, expect } from '@playwright/test';

test.describe('Process Page', () => {
  test('should load timeline and steps in English', async ({ page }) => {
    await page.goto('/en/process');
    
    // Check header
    const h1 = page.locator('h1');
    await expect(h1).toHaveText(/the blueprint to success/i);
    
    // Check specific steps
    await expect(page.locator('text=/1. The Spark/i >> visible=true').first()).toBeVisible();
    await expect(page.locator('text=/2. The Fit Check/i >> visible=true').first()).toBeVisible();
    await expect(page.locator('text=/6. The Kickoff/i >> visible=true').first()).toBeVisible();
    await expect(page.locator('text=/8. The Launch/i >> visible=true').first()).toBeVisible();
  });

  test('should load timeline and steps in Hebrew', async ({ page }) => {
    await page.goto('/he/process');
    
    // Check header
    const h1 = page.locator('h1');
    await expect(h1).toHaveText(/תוכנית האב להצלחה/i);

    // Check specific steps translated
    await expect(page.locator('text=/1. הניצוץ/i >> visible=true').first()).toBeVisible();
    await expect(page.locator('text=/2. שיחת התאמה/i >> visible=true').first()).toBeVisible();
    await expect(page.locator('text=/8. ההשקה/i >> visible=true').first()).toBeVisible();
  });
});
