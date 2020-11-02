const puppeteer = require('puppeteer');

function getDomain(url, subdomain) {
    subdomain = subdomain || false;
    url = url.replace(/(https?:\/\/)?(www.)?/i, '');
    if (!subdomain) {
        url = url.split('.');
        url = url.slice(url.length - 2).join('.');
    }
    if (url.indexOf('/') !== -1) {
        return url.split('/')[0];
    }
    return url;
}

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
  await page.goto(url, {waitUntil: 'networkidle2'});
  let domain = getDomain(url)
  console.log('export DOMAIN=' + domain);
  await page.pdf({path: domain + '.pdf', format: 'A4'});
  await browser.close();
})();