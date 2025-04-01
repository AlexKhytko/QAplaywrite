import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private registrationButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.registrationButton = page.locator('.hero-descriptor_btn.btn.btn-primary');
  }

  async goToLoginPage(url: string) {
    await this.page.goto(url);
  }

  async clickRegistrationButton() {
    await this.registrationButton.click();
  }
}
