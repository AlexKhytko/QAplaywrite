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

test('Name - 1 char', async ({ page }) => {
const registrationPage = new RegistrationPage(page);
  await page.goto(url);
  await page.locator('.hero-descriptor_btn.btn.btn-primary').click();
  await registrationPage.fillRegistrationForm(
    'J',
    'Rambo',
    'rambo@gmail.com',
    'Qq123456',
    'Qq123456'
  );
    // Проверка, что отображается ошибка на поле имени
     await registrationPage.isErrorMessageVisible('Name has to be from 2 to 20 characters long');
  });

  test('Name - 21 char', async ({ page }) => {
  const registrationPage = new RegistrationPage(page);
    await page.goto(url);
    await page.locator('.hero-descriptor_btn.btn.btn-primary').click();
    await registrationPage.fillRegistrationForm(
      'Jsssssssssssssssssssssssssssssssssssssssssssssss',
      'Rambo',
      'rambo@gmail.com',
      'Qq123456',
      'Qq123456'
    );
      // Проверка, что отображается ошибка на поле имени
       await registrationPage.isErrorMessageVisible('Name has to be from 2 to 20 characters long');
    });

    test('Last Name - 1 char', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
      await page.goto(url);
      await page.locator('.hero-descriptor_btn.btn.btn-primary').click();
      await registrationPage.fillRegistrationForm(
        'John',
        'R',
        'rambo@gmail.com',
        'Qq123456',
        'Qq123456'
      );
        // Проверка, что отображается ошибка на поле имени
         await registrationPage.isErrorMessageVisible('Last Name has to be from 2 to 20 characters long');
      });

      test('Last Name - 21 char', async ({ page }) => {
      const registrationPage = new RegistrationPage(page);
        await page.goto(url);
        await page.locator('.hero-descriptor_btn.btn.btn-primary').click();
        await registrationPage.fillRegistrationForm(
          'John',
          'Rambosssssssssssssssssssssssssssssssssssssssssssssss',
          'rambo@gmail.com',
          'Qq123456',
          'Qq123456'
        );
          // Проверка, что отображается ошибка на поле имени
           await registrationPage.isErrorMessageVisible('Last Name has to be from 2 to 20 characters long');
        });