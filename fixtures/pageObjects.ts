import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

//Fixtures: sirven para inicializar cosas una sola vez y reusarlas en todos los tests de todos los archivos.

type Fixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
});
