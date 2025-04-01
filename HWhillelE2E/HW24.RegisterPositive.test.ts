import { test, expect } from '@playwright/test';
import { LoginPage } from './HW24.LoginPage';
import { RegistrationPage } from './HW24.RegistrationPage';

const login = 'guest';
const password = 'welcome2qauto';
const url = `https://${login}:${password}@qauto.forstudy.space`;

test('registration link', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const registrationPage = new RegistrationPage(page);
  await loginPage.goToLoginPage(url);
  await loginPage.clickRegistrationButton();
  await registrationPage.isRegistrationHeadingVisible();
});

test('Register Positive', async ({ page }) => {
  const registrationPage = new RegistrationPage(page);
  await page.goto(url);
  await page.locator('.hero-descriptor_btn.btn.btn-primary').click();
  await registrationPage.fillRegistrationForm(
    'John',
    'Rambo',
    'rambo@gmail.com',
    'Qq123456',
    'Qq123456'
  );
  await registrationPage.isRegisterButtonVisible();
});