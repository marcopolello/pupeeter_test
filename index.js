const puppeteer = require('puppeteer');

(async () => {
    let movieUrl = 'https://www.imdb.com/title/tt0816692/?ref_=nv_sr_srsg_0';

    let browser = await puppeteer.launch(
        {
            headless: false
        }
    );
    let page = await browser.newPage();

    await page.goto(movieUrl);

    let data = await page.evaluate(() => {
        let title = document.querySelector('div[class="title_wrapper"] > h1').innerText;
        let rating = document.querySelector('span[itemprop="ratingValue"]').innerText;
        let ratingCount = document.querySelector('span[itemprop="ratingCount"]').innerText;

        return {
            title,
            rating,
            ratingCount
        }

    });

    console.log(data);

    debugger;

    await browser.close();

}) ();