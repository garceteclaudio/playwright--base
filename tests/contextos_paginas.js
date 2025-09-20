//1. Iniciar un navegador
//2. Abre dos contextos //simil sesiones de usuarios de los navegadores
//  para google
// para wikipedia
//3. Abrir una pagina dentro de cada contextos
//4. Realizar operaciones basicas en ambas paginas

const { chromium } = require("playwright");
// operaciones asincronas ? msj1 msj2 msj3 msj4 (podria correr al mismo tiempo)
// operaciones sincronas ? msj1->msj2->msj3->msj4
// await espera operaciones q se complete

(async () => {
  const browser = await chromium.launch({ headless: false });
  // Contexto 1 google
  const googleContext = await browser.newContext();
  const googlePage = await googleContext.newPage();
  await googlePage.goto("https://www.google.com");
  console.log("Contexto 1 de google abierto");
  await googlePage.waitForTimeout(5000);

  // Contexto 2 wikipedia
  const wikipediaContext = await browser.newContext();
  const wikipediaPage = await googleContext.newPage();
  await wikipediaPage.goto("https://www.wikipedia.org");
  console.log("Contexto 2 de wikipedia abierto");
  await googlePage.waitForTimeout(4000);

  await browser.close();
})();
