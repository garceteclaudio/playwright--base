const { chromium } = require("playwright");
const { expect, test } = require("@playwright/test");

(async () => {
  URL = "";
  const browser = await chromium.launch({ headless: false });
  // Contexto
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(URL);

  await page.waitForTimeout(2000);

  try {
    const h2DentrodeIframe = await page.$("#h2Titulo");
    console.log("Texto dentro del iframe:", h2DentrodeIframe);
  } catch (error) {
    console.log("Error:" + error);
  }

  //const ifram = await page.frame({name: 'main'});
  const iframeElement = await page.$("#iframePrincipal");
  const frame = await iframeElement.contentFrame();

  // Usar el frame para interactuar con el contenido dentro del iframe
  const texto = await frame.$("#h2Titulo");
  const text = await texto.innerText();
  console.log("Texto dentro del iframeee:", text);

  //const texto = await frame.textContent("h2");
  //console.log("Texto dentro del iframe:", texto);

  await browser.close();
})();
