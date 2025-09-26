import { test } from '../fixtures/pageObjects';



test.beforeEach(async ({ loginPage }) => {
  // Runs before each test and signs in each page.
  await loginPage.goto();
});

test('Login D1 1 to saucedemo con fixtures', async ({ loginPage, inventoryPage }) => {
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.waitForPage();
  await inventoryPage.verifyLogo();
});


test('Login D1 2 saucedemo con fixtures', async ({ loginPage, inventoryPage }) => {
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.waitForPage();
  await inventoryPage.verifyLogo();
});


test('Login D1 3 saucedemo con fixtures', async ({ loginPage, inventoryPage }) => {
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.waitForPage();
  await inventoryPage.verifyLogo();
});

test('Login D1 4 saucedemo con fixtures', async ({ loginPage, inventoryPage }) => {
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.waitForPage();
  await inventoryPage.verifyLogo();
});