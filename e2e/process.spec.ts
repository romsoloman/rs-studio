import { test, expect } from '@playwright/test';

test.describe('Process Page', () => {
  test('should load timeline and steps in English', async ({ page }) => {
    await page.goto('/en/process');
    
    // Check header
    const h1 = page.locator('h1');
    await expect(h1).toHaveText(/our process/i);
    
    // Check specific steps
    await expect(page.locator('text=/First Contact/i >> visible=true').first()).toBeVisible();
    await expect(page.locator('text=/Qualification Call/i >> visible=true').first()).toBeVisible();
    await expect(page.locator('text=/Kickoff/i >> visible=true').first()).toBeVisible();
    await expect(page.locator('text=/Launch/i >> visible=true').first()).toBeVisible();
  });

  test('should load timeline and steps in Hebrew', async ({ page }) => {
    await page.goto('/he/process');
    
    // Check header
    const h1 = page.locator('h1');
    await expect(h1).toHaveText(/התהליך שלנו/i);

    // Check specific steps translated
    await expect(page.locator('text=/יצירת קשר/i >> visible=true').first()).toBeVisible();
    await expect(page.locator('text=/שיחת היכרות/i >> visible=true').first()).toBeVisible();
    await expect(page.locator('text=/השקה/i >> visible=true').first()).toBeVisible();
  });
});
