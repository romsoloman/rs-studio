import { test, expect } from '@playwright/test';

test.describe('Availability Badge', () => {
  test('renders on the home page correctly', async ({ page }) => {
    await page.goto('/en');
    
    // The badge text
    const badge = page.locator('text=Currently taking clients');
    await expect(badge).toBeVisible();
    
    // Verifying it has the green dot inside (the span should be visible if the container is rendered)
    const container = page.locator('div.inline-flex:has-text("Currently taking clients")');
    const greenDot = container.locator('span.bg-green-500');
    await expect(greenDot).toBeVisible();
  });
});
