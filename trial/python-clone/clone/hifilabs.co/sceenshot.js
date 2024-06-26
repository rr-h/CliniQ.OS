const puppeteer = require('puppeteer');
const path = require('path');

async function checkPageRendering(fileUrl) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
        await page.goto(fileUrl, { waitUntil: 'networkidle2' });
        await page.screenshot({ path: 'screenshot.png' });
        console.log('Screenshot taken. Check screenshot.png for the rendered page.');
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await browser.close();
    }
}

const fileUrl = 'file:///home/rr-h/Documents/Git/Projects/CliniQ.OS/trial/python-clone/clone/hifilabs.co/index.html';

checkPageRendering(fileUrl);