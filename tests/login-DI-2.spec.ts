import { test } from '../fixtures/pageObjects';

test('Login 4to saucedemo con fixtures', async ({ loginPage, inventoryPage }) => {
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.waitForPage();
  await inventoryPage.verifyLogo();
});
