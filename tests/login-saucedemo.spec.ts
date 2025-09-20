import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('Login to saucedemo', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  // Navegar y loguearse
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Validar la página de inventario
  await inventoryPage.waitForPage();
  await inventoryPage.verifyLogo();

  console.log("✅ Texto 'Swag Labs' encontrado y verificado correctamente");
});