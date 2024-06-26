const puppeteer = require('puppeteer');
const path = require('path');

async function checkScripts(fileUrl, scripts) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
        await page.goto(fileUrl, { waitUntil: 'networkidle2' });

        const results = await Promise.all(
            scripts.map(async(script) => {
                const scriptPath = path.join(path.dirname(fileUrl), script);
                const result = await page.evaluate((scriptPath) => {
                    return fetch(scriptPath, { method: 'HEAD' })
                        .then(res => res.ok ? { script: scriptPath, loaded: true } : { script: scriptPath, loaded: false })
                        .catch(() => ({ script: scriptPath, loaded: false }));
                }, scriptPath);
                return result;
            })
        );

        console.log('Script Load Results:');
        results.forEach(result => console.log(`${result.script}: ${result.loaded ? 'Loaded' : 'Failed to load'}`));
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await browser.close();
    }
}

const fileUrl = 'file:///home/rr-h/Documents/Git/Projects/CliniQ.OS/trial/python-clone/clone/hifilabs.co/index.html';
const scripts = [
    '_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
    '_next/static/chunks/webpack-fd418f31fe4b0d08.js',
    '_next/static/chunks/framework-0ba0ddd33199226d.js',
    '_next/static/chunks/main-c0364ec597719817.js',
    '_next/static/chunks/pages/_app-ccef8dd21efcc9f9.js',
    '_next/static/chunks/837-c19bc76e77d41ef3.js',
    '_next/static/chunks/984-656420980a2b2a72.js',
    '_next/static/chunks/803-7cd30887c5daaa8a.js',
    '_next/static/chunks/739-32fc889ec63fd09b.js',
    '_next/static/chunks/pages/index-453bea2c42b4bda8.js',
    '_next/static/_qbKLC8NwpL61siZyGWi2/_buildManifest.js',
    '_next/static/_qbKLC8NwpL61siZyGWi2/_ssgManifest.js'
];

checkScripts(fileUrl, scripts);