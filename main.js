const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args:[
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage'
    ]
  });
  const page = await browser.newPage();
  let url = process.argv.slice(2)[0];
  await page.goto('https://' + url, {waitUntil: 'networkidle2'});
  await page.pdf({path: '/pdf/' + url + '.pdf', format: 'A4'});
  await browser.close();
})();