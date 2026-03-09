import { test, expect } from '@playwright/test';

test.describe('WhatsApp Social Component', () => {
  test('button is visible and has correct href', async ({ page }) => {
    await page.goto('/en');
    
    // We find it via its specific href substring 
    const whatsappLink = page.locator('a[href*="wa.me"]');
    await expect(whatsappLink).toBeVisible();
    
    // Ensure it's a valid WhatsApp URL string
    const href = await whatsappLink.getAttribute('href');
    expect(href).toContain('https://wa.me/');
  });
});
