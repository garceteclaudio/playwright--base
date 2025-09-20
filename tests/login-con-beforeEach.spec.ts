import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

let loginPage: LoginPage;
let inventoryPage: InventoryPage;

// Antes de cada test instancio el objeto
test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  inventoryPage = new InventoryPage(page);
});

test('Login to saucedemo con beforeach', async () => {
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.waitForPage();
  await inventoryPage.verifyLogo();
});
