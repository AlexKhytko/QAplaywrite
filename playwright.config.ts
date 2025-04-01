import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './HWhillelE2E', // Папка с тестами
  fullyParallel: true, // Запускать тесты параллельно
  forbidOnly: !!process.env.CI, // Запрещать запуск только некоторых тестов, если в CI
  retries: process.env.CI ? 2 : 0, // Повторить тесты, если они не прошли (в CI — 2 попытки)
  workers: process.env.CI ? 1 : undefined, // Ограничить количество воркеров до 1 в CI

  reporters: [ // Форматы отчётов
    ['list'],
    ['html']
  ],

  use: {
    screenshot: 'only-on-failure', // Делать скриншоты только при неудаче
    baseURL: process.env.STAGING, // Основной URL для тестов
  },

  projects: [
    {
      name: 'QA', // Название проекта
      use: {
        baseURL: process.env.STAGING || 'https://guest:welcome2qauto@qauto.forstudy.space/', // Если нет переменной STAGING, использовать этот URL
//         httpCredentials: { // HTTP-учетные данные
//           username: process.env.HTTP_CREDENTIALS_USERNAME as String,
//           password: process.env.HTTP_CREDENTIALS_PASSWORD as String,
//         }
      }
    }
  ]
});

