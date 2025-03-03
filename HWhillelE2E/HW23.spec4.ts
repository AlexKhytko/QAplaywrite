import { test, expect } from '@playwright/test';

const login = 'guest';
const password = 'welcome2qauto';
const url = `https://${login}:${password}@qauto.forstudy.space`;

test('registration link', async ({ page }) => {
  await page.goto(url);
  await page.locator('.hero-descriptor_btn.btn.btn-primary').click();
  await expect(page.getByRole('heading', { name: 'Registration' })).toBeVisible();
  });

test('Register Positive', async ({ page }) => {
   await page.goto(url);
    await page.locator('.hero-descriptor_btn.btn.btn-primary').click();
    const nameInput = page.locator('input[name="name"]');
   await nameInput.fill('John');
    const lastNameInput = page.locator('input[name="lastName"]');
   await lastNameInput.fill('Rambo');
    const emailInput = page.locator('input[name="email"]');
   await emailInput.fill('rembo@gmail.com');
    const passwordInput = page.locator('input[name="password"]');
   await passwordInput.fill('Qq123456');
    const repeatPasswordInput = page.locator('input[name="repeatPassword"]');
   await repeatPasswordInput.fill('Qq123456');
   const footer = page.locator('.btn.btn-primary' , {hasText : "Register"});
   await expect(footer).toBeVisible();
});

test('Name - 1 char', async ({ page }) => {
   await page.goto(url);
    await page.locator('.hero-descriptor_btn.btn.btn-primary').click();
    const nameInput = page.locator('input[name="name"]');
   await nameInput.fill('J');
    const lastNameInput = page.locator('input[name="lastName"]');
   await lastNameInput.fill('Rambo');
    const emailInput = page.locator('input[name="email"]');
   await emailInput.fill('rembo@gmail.com');
    const passwordInput = page.locator('input[name="password"]');
   await passwordInput.fill('Qq123456');
    const repeatPasswordInput = page.locator('input[name="repeatPassword"]');
   await repeatPasswordInput.fill('Qq123456');
   const footer = page.locator('.invalid-feedback' , {hasText : 'Name has to be from 2 to 20 characters long'});
   await expect(footer).toBeVisible();
});

test('Name - 21 char', async ({ page }) => {
   await page.goto(url);
    await page.locator('.hero-descriptor_btn.btn.btn-primary').click();
    const nameInput = page.locator('input[name="name"]');
   await nameInput.fill('Jqqqqqqqqqqqqqqqqqqqq');
    const lastNameInput = page.locator('input[name="lastName"]');
   await lastNameInput.fill('Rambo');
    const emailInput = page.locator('input[name="email"]');
   await emailInput.fill('rembo@gmail.com');
    const passwordInput = page.locator('input[name="password"]');
   await passwordInput.fill('Qq123456');
    const repeatPasswordInput = page.locator('input[name="repeatPassword"]');
   await repeatPasswordInput.fill('Qq123456');
   const footer = page.locator('.invalid-feedback' , {hasText : 'Name has to be from 2 to 20 characters long'});
   await expect(footer).toBeVisible();
});


test('Last Name - 1 char', async ({ page }) => {
   await page.goto(url);
    await page.locator('.hero-descriptor_btn.btn.btn-primary').click();
    const nameInput = page.locator('input[name="name"]');
   await nameInput.fill('John');
    const lastNameInput = page.locator('input[name="lastName"]');
   await lastNameInput.fill('R');
    const emailInput = page.locator('input[name="email"]');
   await emailInput.fill('rembo@gmail.com');
    const passwordInput = page.locator('input[name="password"]');
   await passwordInput.fill('Qq123456');
    const repeatPasswordInput = page.locator('input[name="repeatPassword"]');
   await repeatPasswordInput.fill('Qq123456');
   const footer = page.locator('.invalid-feedback' , {hasText : 'Last Name has to be from 2 to 20 characters long'});
   await expect(footer).toBeVisible();
});

test('Last Name - 21 char', async ({ page }) => {
   await page.goto(url);
    await page.locator('.hero-descriptor_btn.btn.btn-primary').click();
    const nameInput = page.locator('input[name="name"]');
   await nameInput.fill('John');
    const lastNameInput = page.locator('input[name="lastName"]');
   await lastNameInput.fill('Rambooooooooooooooooo');
    const emailInput = page.locator('input[name="email"]');
   await emailInput.fill('rembo@gmail.com');
    const passwordInput = page.locator('input[name="password"]');
   await passwordInput.fill('Qq123456');
    const repeatPasswordInput = page.locator('input[name="repeatPassword"]');
   await repeatPasswordInput.fill('Qq123456');
   const footer = page.locator('.invalid-feedback' , {hasText : 'Last Name has to be from 2 to 20 characters long'});
   await expect(footer).toBeVisible();
});

test('Email is incorrect', async ({ page }) => {
   await page.goto(url);
    await page.locator('.hero-descriptor_btn.btn.btn-primary').click();
    const nameInput = page.locator('input[name="name"]');
   await nameInput.fill('John');
    const lastNameInput = page.locator('input[name="lastName"]');
   await lastNameInput.fill('Rambo');
    const emailInput = page.locator('input[name="email"]');
   await emailInput.fill('rambo');
    const passwordInput = page.locator('input[name="password"]');
   await passwordInput.fill('Qq123456');
    const repeatPasswordInput = page.locator('input[name="repeatPassword"]');
   await repeatPasswordInput.fill('Qq123456');
   const footer = page.locator('.invalid-feedback' , {hasText : 'Email is incorrect'});
   await expect(footer).toBeVisible();
});


test('Password has 7 char', async ({ page }) => {
   await page.goto(url);
    await page.locator('.hero-descriptor_btn.btn.btn-primary').click();
    const nameInput = page.locator('input[name="name"]');
   await nameInput.fill('John');
    const lastNameInput = page.locator('input[name="lastName"]');
   await lastNameInput.fill('Rambo');
    const emailInput = page.locator('input[name="email"]');
   await emailInput.fill('rambo');
    const passwordInput = page.locator('input[name="password"]');
   await passwordInput.fill('Qq12345');
    const repeatPasswordInput = page.locator('input[name="repeatPassword"]');
   await repeatPasswordInput.fill('Qq12345');
   const footer = page.locator('.invalid-feedback' , {hasText : 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'});
   await expect(footer).toBeVisible();
});

test('Password has more 15 char', async ({ page }) => {
   await page.goto(url);
    await page.locator('.hero-descriptor_btn.btn.btn-primary').click();
    const nameInput = page.locator('input[name="name"]');
   await nameInput.fill('John');
    const lastNameInput = page.locator('input[name="lastName"]');
   await lastNameInput.fill('Rambo');
    const emailInput = page.locator('input[name="email"]');
   await emailInput.fill('rambo');
    const passwordInput = page.locator('input[name="password"]');
   await passwordInput.fill('Qq123456789876543');
    const repeatPasswordInput = page.locator('input[name="repeatPassword"]');
   await repeatPasswordInput.fill('Qq123456789876543');
   const footer = page.locator('.invalid-feedback' , {hasText : 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'});
   await expect(footer).toBeVisible();
});


