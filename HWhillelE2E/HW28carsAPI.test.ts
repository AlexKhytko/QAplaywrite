import { test, expect } from '@playwright/test';

 test('Enterence garage', async ({ page }: { page: Page }) => {
  await page.goto('https://guest:welcome2qauto@qauto.forstudy.space');
  await page.getByText('Sign In').click();
  await page.locator('#signinEmail').fill('user@user.test');
  await page.locator('#signinPassword').fill('Qwerty12345');
  await page.getByText('Login').click();
  await page.waitForURL('https://guest:welcome2qauto@qauto.forstudy.space/panel/garage');
  await page.context().storageState({ path: 'storageState.json' });
});

test('Get Bearer Token', async ({ request }) => {
  const response = await request.post('https://qauto.forstudy.space/api/auth/login', {
    data: {
     "email": "test@test.com",
       "password": "Qwerty12345",
       "remember": false
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

// Положительный сценарий: создание машины
test('Car successfully created', async ({ request }) => {
  const response = await request.post('https://qauto.forstudy.space/api/cars', {
    data: {
    "id": 314764,
          "carBrandId": 1,
          "carModelId": 1,
          "initialMileage": 122,
          "updatedMileageAt": "2025-03-31T06:48:12.000Z",
          "carCreatedAt": "2025-03-31T06:48:12.000Z",
          "mileage": 122,
          "brand": "Audi",
          "model": "TT",
          "logo": "audi.png"
    },
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
     }
  });

  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.status).toBe('ok');
  expect(responseBody.data).toHaveProperty('id');
  expect(responseBody.data.carBrandId).toBe(1);
  expect(responseBody.data.carModelId).toBe(1);
  expect(responseBody.data.mileage).toBe(122);
});

// Отрицательный сценарий 1: ошибка авторизации (401)
test('Create car - Error: response status is 401', async ({ request }) => {
  const response = await request.post('https://qauto.forstudy.space/api/cars', {
    data: {
 "id": 314712,
       "carBrandId": 1,
       "carModelId": 1,
       "initialMileage": 122,
       "updatedMileageAt": "2025-03-31T06:48:12.000Z",
       "carCreatedAt": "2025-03-31T06:48:12.000Z",
       "mileage": 122,
       "brand": "Audi",
       "model": "TT",
       "logo": "audi.png"
    },
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
     }
  });

  expect(response.status()).toBe(401);
  const responseBody = await response.json();
  expect(responseBody.status).toBe('error');
  expect(responseBody.message).toBe('Not authenticated');
});

// Отрицательный сценарий 2: неверный запрос (400)
test('Bad request error', async ({ request }) => {
  const response = await request.post('https://qauto.forstudy.space/api/cars', {
    data: {
      carBrandId: 1, // Пропущены обязательные параметры carModelId и mileage
    },
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
      }
  });

  expect(response.status()).toBe(400); // Ошибка 400 для неверного запроса
  const responseBody = await response.json();
  expect(responseBody.status).toBe('error');
  expect(responseBody.message).toBe('Bad request');
});
