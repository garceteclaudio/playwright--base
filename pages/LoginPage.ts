import { Page, Locator } from '@playwright/test';

import * as LoginLocators from "../locators/LoginLocators.json"

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator(LoginLocators.loginUsernameInput.locator);
    this.passwordInput = page.locator(LoginLocators.loginPasswordInput.locator);
    this.loginButton = page.locator(LoginLocators.loginButton.locator);
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
