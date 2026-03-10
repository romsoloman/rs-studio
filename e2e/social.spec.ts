import { test, expect } from '@playwright/test';

test.describe('WhatsApp Social Component', () => {
  test('button is visible and has correct href', async ({ page }) => {
    await page.goto('/en');
    await page.waitForLoadState('domcontentloaded');
    
    // We find the floating button via its specific href substring and .fixed class
    const whatsappLink = page.locator('a.fixed[href*="wa.me"]');
    await expect(whatsappLink).toBeVisible({ timeout: 10000 });
    
    // Ensure it's a valid WhatsApp URL string
    const href = await whatsappLink.getAttribute('href');
    expect(href).toContain('https://wa.me/');
  });
});
