import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly swagLabsLogo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.swagLabsLogo = page.locator('.app_logo');
  }

  async waitForPage() {
    await this.page.waitForURL('**/inventory.html');
  }

  async verifyLogo() {
    await expect(this.swagLabsLogo).toHaveText('Swag Labs');
    await expect(this.swagLabsLogo).toBeVisible();
  }
}
