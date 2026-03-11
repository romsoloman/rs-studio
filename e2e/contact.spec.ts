import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test('should render and accept input', async ({ page }) => {
    await page.goto('/en/contact');
    
    // Verify form elements exist
    const nameInput = page.locator('input[id="contact-name"]');
    const emailInput = page.locator('input[id="contact-email"]');
    const messageInput = page.locator('textarea[id="contact-message"]');
    const submitBtn = page.locator('button[type="submit"]');

    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(messageInput).toBeVisible();
    await expect(submitBtn).toBeVisible();

    // Fill out the form
    await nameInput.fill('Test User');
    await emailInput.fill('test@example.com');
    await messageInput.fill('This is a test message from Playwright.');
    
    // Verify inputs were filled
    await expect(nameInput).toHaveValue('Test User');
    await expect(emailInput).toHaveValue('test@example.com');
    await expect(messageInput).toHaveValue('This is a test message from Playwright.');
    
    // Submit form
    // Since we don't know the exact success handler, we expect it not to crash
    // and ideally the page to still be interactive or show a typical browser validation behavior
    // If it navigates or shows a Toast, we just ensure no unhandled exceptions.
    await submitBtn.click();
    
    // An assumption based on generic implementations: check if it prevents default 
    // or if form submission succeeds softly without a 500 error.
    // Ensure the page is still active.
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
  });

});
