import { test as base, Page } from '@playwright/test';

export const test = base.extend<{ userGaragePage: Page }>({
  userGaragePage: async ({ page }, use) => {
    // Добавление cookies для youtube.com и forstudy.space
    await page.context().addCookies([
      {
        name: "YSC",
        value: "NrFv3zPFXzo",
        domain: ".youtube.com",
        path: "/",
        expires: -1,
        httpOnly: true,
        secure: true,
        sameSite: "None",
      },
      {
        name: "VISITOR_INFO1_LIVE",
        value: "XX86_zu9kpw",
        domain: ".youtube.com",
        path: "/",
        expires: 1758271163.212744, // Может потребоваться обновить дату истечения
        httpOnly: true,
        secure: true,
        sameSite: "None",
      },
      {
        name: "VISITOR_PRIVACY_METADATA",
        value: "CgJVQRIEGgAgHw%3D%3D",
        domain: ".youtube.com",
        path: "/",
        expires: 1758271163.212879, // Может потребоваться обновить дату истечения
        httpOnly: true,
        secure: true,
        sameSite: "None",
      },
      {
        name: "__Secure-ROLLOUT_TOKEN",
        value: "CKbVop-RuYHYiQEQ-pna6-afjAMY-pna6-afjAM%3D",
        domain: ".youtube.com",
        path: "/",
        expires: 1758271163.212917, // Может потребоваться обновить дату истечения
        httpOnly: true,
        secure: true,
        sameSite: "None",
      },
      {
        name: "sid",
        value: "s%3ARmZIoDFijeTVhkb38DoJdMkRrwVekWre.QeUE%2BXD3Do%2B%2FXzVnDS7Or4qnOY8wFZghAEGqvjo4pCU",
        domain: ".forstudy.space",
        path: "/",
        expires: 1742805570.410389, // Может потребоваться обновить дату истечения
        httpOnly: false,
        secure: false,
        sameSite: "Lax",
      }
    ], {
      origins: [
        {
          origin: "https://www.youtube.com",
          localStorage: [
            {
              name: "ytidb::LAST_RESULT_ENTRY_KEY",
              value: "{\"data\":{\"hasSucceededOnce\":true},\"expiration\":1745311170215,\"creation\":1742719170215}"
            }
          ]
        }
      ]
    });

    // Возвращаем страницу для использования в тестах
    await use(page);
  },
});

