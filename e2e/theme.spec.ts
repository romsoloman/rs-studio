import { test, expect } from '@playwright/test';

test.describe('Theme Toggle', () => {
  test('dark/light mode toggle persists', async ({ page }) => {
    await page.goto('/en');
    
    const htmlElement = page.locator('html');
    
    // Button label is "Toggle dark mode"
    const themeBtn = page.locator('button[aria-label="Toggle dark mode"]');
    await expect(themeBtn).toBeVisible();
    
    // Click toggle to switch theme 
    // Depending on system preference it could start as light or dark.
    // We just want to ensure it toggles the class.
    const initialClass = await htmlElement.getAttribute('class') || '';
    const wasDark = initialClass.includes('dark');
    
    await themeBtn.click();
    
    // Verify class changed
    if (wasDark) {
      await expect(htmlElement).not.toHaveClass(/dark/);
    } else {
      await expect(htmlElement).toHaveClass(/dark/);
    }
    
    // Reload and verify persistence
    await page.reload();
    
    if (wasDark) {
      await expect(htmlElement).not.toHaveClass(/dark/);
    } else {
      await expect(htmlElement).toHaveClass(/dark/);
    }
  });
});
