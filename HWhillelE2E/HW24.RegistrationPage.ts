import { expect, Page, Locator } from '@playwright/test';

export class RegistrationPage {
  private page: Page;
  private nameInput: Locator;
  private lastNameInput: Locator;
  private emailInput: Locator;
  private passwordInput: Locator;
  private repeatPasswordInput: Locator;
  private registerButton: Locator;
  private errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator('input[name="name"]');
    this.lastNameInput = page.locator('input[name="lastName"]');
    this.emailInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.repeatPasswordInput = page.locator('input[name="repeatPassword"]');
    this.registerButton = page.locator('.btn.btn-primary', { hasText: 'Register' });
    this.errorMessage = page.locator('.invalid-feedback');
  }

  // Метод для заполнения формы регистрации
  async fillRegistrationForm(name: string, lastName: string, email: string, password: string, repeatPassword: string) {
    await this.nameInput.fill(name);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.repeatPasswordInput.fill(repeatPassword);
  }

  // Метод для проверки, что кнопка регистрации видна
  async isRegisterButtonVisible() {
    await expect(this.registerButton).toBeVisible();
  }
// Метод для проверки сообщения об ошибке валидации
  async isErrorMessageVisible(errorText: string) {
    await expect(this.errorMessage).toHaveText(errorText); // Проверка на наличие текста в сообщении об ошибке
  }
}

