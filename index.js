const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://rafaelgoulartb.vercel.app/");
  await page.screenshot({ path: "results/screenshots/example.png" });

  await browser.close();
})();
