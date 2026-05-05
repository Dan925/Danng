import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

(async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const distDir = path.resolve(__dirname, '../dist');
    const htmlPath = path.join(distDir, 'resume/index.html');
    const pdfPath = path.join(distDir, 'resume.pdf');

    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.emulateMediaType('print');
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
    await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true,
        preferCSSPageSize: true,
    });

    await browser.close();
    console.log(`Generated ${pdfPath}`);
})();
