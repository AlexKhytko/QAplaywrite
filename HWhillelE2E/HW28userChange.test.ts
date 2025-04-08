import { test, expect, Page } from '@playwright/test';

test('Вход', async ({ page }: { page: Page }) => {

  await page.goto('https://guest:welcome2qauto@qauto.forstudy.space');
  await page.getByText('Sign In').click();
  await page.locator('#signinEmail').fill('user@user.test');
  await page.locator('#signinPassword').fill('Qwerty12345');
  await page.getByText('Login').click();
  await page.locator('.btn.btn-white.btn-sidebar.sidebar_btn.-profile').click();

  await page.route('**/api/user/profile', async (route, request) => {
       const response = await route.continue();

    const responseBody = await response.body(); // Получаем тело ответа
    const profileData = JSON.parse(responseBody.toString()); // Преобразуем в JSON
    console.log('Текущие данные профиля:', profileData);  // Логируем текущие данные
      // Подменяем данные
     const modifiedProfile = {
       userId: 184060,
       photoFilename: "Duser.png",
       distanceUnit: "mm",
       currency: "usd"
     };

     console.log('Новые данные профиля:', modifiedProfile); // Логируем новые данные

   route.fulfill({
       status: 200,
       contentType: 'application/json',
       body: JSON.stringify(modifiedProfile)
     });
   });
   await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/panel/profile');
   const userName = await page.locator('text=User User');
   await expect(userName).toBeVisible();

});
