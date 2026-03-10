import { test, expect } from '@playwright/test';

test.describe('Availability Badge', () => {
  test('renders on the home page correctly', async ({ page }) => {
    await page.goto('/en');
    
    // The badge text
    const badge = page.locator('text=/Accepting new projects|Available for select partnerships/');
    await expect(badge).toBeVisible();
    
    // Verifying it has the green dot inside (the span should be visible if the container is rendered)
    const container = page.locator('div.inline-flex').filter({ hasText: /Accepting new projects|Available for select partnerships/ });
    const greenDot = container.locator('span.bg-accent').first();
    await expect(greenDot).toBeVisible();
  });
});
