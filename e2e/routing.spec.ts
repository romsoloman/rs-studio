import { test, expect } from '@playwright/test';

test.describe('i18n Routing', () => {
  test('should redirect root to default locale (en)', async ({ page }) => {
    await page.goto('/');
    
    // Check if we arrived at /en
    await expect(page).toHaveURL(/\/en/);
    
    // Check for the availability badge in English
    await expect(page.locator('text=Currently taking clients')).toBeVisible();
  });

  test('should allow switching to Hebrew', async ({ page }) => {
    await page.goto('/en');
    
    // Find the locale toggle (Assuming it says HE or has a specific role)
    // Use aria-label for the most robust selection
    const localeToggle = page.getByLabel('Toggle language');
    await localeToggle.click();
    
    // Check if we arrived at /he
    await expect(page).toHaveURL(/\/he/);
    
    // Check for the availability badge in Hebrew
    // "זמין לפרויקטים חדשים" is "Currently taking clients" in he.json
    await expect(page.locator('text=זמין לפרויקטים חדשים')).toBeVisible();
  });

  test('all nav links resolve without 404', async ({ page }) => {
    // We check the Header links
    const links = ['/services', '/portfolio', '/blog', '/contact'];
    
    for (const link of links) {
      await page.goto(`/en${link}`);
      // Ensure we hit a 200/valid page by verifying a standard element like h1
      // If it yielded a generic Nuxt/Next 404 page, the specific page headers wouldn't be present
      // But more robustly, Playwright throws on goto 404/500 if wait logic fails 
      // or we can just ensure <h1> is visible
      await expect(page.locator('h1').first()).toBeVisible();
    }
  });
});
