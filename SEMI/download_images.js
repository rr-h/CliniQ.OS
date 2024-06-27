const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://cdn.hifilabs.co', { waitUntil: 'networkidle2' });

  const urls = await page.evaluate(() => Array.from(document.images, e => e.src));

  for (const url of urls) {
    const viewSource = await page.goto(url);
    const fileName = path.basename(url);
    fs.writeFile(path.join('hifilabs', 'images', fileName), await viewSource.buffer(), err => {
      if (err) {
        console.log(`Error saving ${fileName}:`, err);
      } else {
        console.log(`Saved ${fileName}`);
      }
    });
  }

  await browser.close();
})();
