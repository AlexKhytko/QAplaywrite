const { test, expect } = require('@playwright/test');

test('Get Bearer Token', async ({ request }) => {
  const response = await request.post('https://qauto.forstudy.space/api/auth/login', {
    data: {
      username: 'user@user.test',  // Замените на ваш логин
      password: 'Qwerty12345'   // Замените на ваш пароль
    },
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  const responseBody = await response.json();
  const token = responseBody.token;  // Предположим, что токен приходит в поле `token`

  console.log('Bearer Token:', token);  // Сохраняем токен для дальнейшего использования
});