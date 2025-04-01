// tests/setup.ts
import { test, expect, Page } from '@playwright/test';

test('Збереження стану сховища після логіну', async ({ page }: { page: Page }) => {
  await page.goto('https://guest:welcome2qauto@qauto.forstudy.space');
  await page.getByText('Sign In').click();
  await page.locator('#signinEmail').fill('user@user.test');
  await page.locator('#signinPassword').fill('Qwerty12345');
  await page.getByText('Login').click();
  await page.waitForURL('https://guest:welcome2qauto@qauto.forstudy.space/panel/garage');
  await page.context().storageState({ path: 'storageState.json' });
});

