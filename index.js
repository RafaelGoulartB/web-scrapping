const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://rafaelgoulartb.vercel.app/");

  const resultList = await page.evaluate(() => {
    const nodeList = document.querySelectorAll("#portfolio div h2");

    const projectsTitleArray = [...nodeList];

    const list = projectsTitleArray.map((item) => {
      return {
        title: item.textContent,
      }
    });

    return list
  });

  fs.writeFile('projects.json', JSON.stringify(resultList, null, 2), err => {
    if(err) {
      console.error(err)
      throw new Error('Something went wrong')}
    else console.log('ok')
  })

  await browser.close();
})();
