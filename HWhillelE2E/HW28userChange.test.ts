import { test, expect, Page } from '@playwright/test';

test('Збереження стану сховища після логіну', async ({ page }: { page: Page }) => {
  // Логин
  await page.goto('https://guest:welcome2qauto@qauto.forstudy.space');
  await page.getByText('Sign In').click();
  await page.locator('#signinEmail').fill('user@user.test');
  await page.locator('#signinPassword').fill('Qwerty12345');
  await page.getByText('Login').click();

  // Кликаем на кнопку профиля, чтобы попасть на страницу
  await page.locator('.btn.btn-white.btn-sidebar.sidebar_btn.-profile').click();

  // Перехватываем запрос, который получает данные профиля
  await page.route('**/api/user/profile', async (route, request) => {
    // Логируем текущие данные профиля, которые приходят в запросе
    const response = await route.continue();

    const responseBody = await response.body(); // Получаем тело ответа
    const profileData = JSON.parse(responseBody.toString()); // Преобразуем в JSON
    console.log('Текущие данные профиля:', profileData);  // Логируем текущие данные

//     // Подменяем данные
//     const modifiedProfile = {
//       userId: 200906,
//       photoFilename: "default-user.png",
//       name: "Duser",
//       lastName: "Duser"
//     };
//
//     console.log('Новые данные профиля:', modifiedProfile); // Логируем новые данные
//
//     // Возвращаем подмененные данные
//     route.fulfill({
//       status: 200,
//       contentType: 'application/json',
//       body: JSON.stringify(modifiedProfile)
//     });
   });
//
//   // Дожидаемся загрузки страницы после подмены данных
//   await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/panel/profile');
//
//   // Проверяем, что на странице отобразились подмененные данные
//   // Используем локатор для текста, чтобы найти имя и фамилию на странице
//   const userName = await page.locator('text=Duser Duser');
//   await expect(userName).toBeVisible();

});
