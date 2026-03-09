import { test, expect } from '@playwright/test';

test.describe('RTL Layout', () => {
  test('should render correct direction for Hebrew locale', async ({ page }) => {
    await page.goto('/he');
    
    // Verify html tag has dir="rtl"
    const htmlElement = page.locator('html');
    await expect(htmlElement).toHaveAttribute('dir', 'rtl');
  });

  test('should render correct direction for English locale', async ({ page }) => {
    await page.goto('/en');
    
    // Verify html tag has dir="ltr"
    const htmlElement = page.locator('html');
    await expect(htmlElement).toHaveAttribute('dir', 'ltr');
  });
});
