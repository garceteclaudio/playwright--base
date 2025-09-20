const { chromium } = require("playwright");
const { expect } = require("@playwright/test");

(async () => {
  const browser = await chromium.launch({ headless: false });

  try {
    // Contexto
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navegar a la página
    await page.goto("https://www.saucedemo.com/");

    // Login
    await page.fill("#user-name", "standard_user");
    await page.fill("#password", "secret_sauce");
    await page.click("#login-button");

    // Esperar a que la página cargue completamente
    await page.waitForURL("**/inventory.html");

    //await page.waitForTimeout(6000);
    // Verificar el texto "Swag Labs" usando expect

    const swagLabsText = page.locator(".app_logo"); // Selector más específico
    await expect(swagLabsText).toHaveText("Swag Labs");

    await page.waitForTimeout(1000);
    // También puedes verificar que esté visible
    await expect(swagLabsText).toBeVisible();

    console.log("✅ Texto 'Swag Labs' encontrado y verificado correctamente");

    // Cerrar el navegador
    await browser.close();
  } catch (error) {
    console.error("❌ Error durante la ejecución:", error.message);
    await browser.close();
    process.exit(1);
  }
})();
