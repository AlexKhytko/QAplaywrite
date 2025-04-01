import { test, expect } from '@playwright/test';

test('Test with baseUrl and credentials', async ({ page }) => {

 await page.goto('/');  // / буде додано до BASE_URL з конфігурації

expect(await page.title()).toBe('Hillel Qauto');  // Замініть на очікувану назву
  });
