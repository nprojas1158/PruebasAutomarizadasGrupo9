const puppeteer = require('puppeteer'); // v20.7.4 or later
const assert = require('assert');
const { email, password, ghost_url, blog_name } = require('../config.js');

(async () => {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1341,
            height: 955
        })
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        startWaitingForEvents();
        await targetPage.goto(ghost_url);
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#identification'),
            targetPage.locator('::-p-xpath(//*[@id=\\"identification\\"])'),
            targetPage.locator(':scope >>> #identification'),
            targetPage.locator('::-p-aria(Email address)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 206.5,
                y: 23.84375,
              },
            });
            await page.screenshot({path: './results/pagina.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#identification'),
            targetPage.locator('::-p-xpath(//*[@id=\\"identification\\"])'),
            targetPage.locator(':scope >>> #identification'),
            targetPage.locator('::-p-aria(Email address)')
        ])
            .setTimeout(timeout)
            .fill(email);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#password'),
            targetPage.locator('::-p-xpath(//*[@id=\\"password\\"])'),
            targetPage.locator(':scope >>> #password'),
            targetPage.locator('::-p-aria(Password)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 242.5,
                y: 24.15625,
              },
            });
            await page.screenshot({path: './results/pagina1.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#password'),
            targetPage.locator('::-p-xpath(//*[@id=\\"password\\"])'),
            targetPage.locator(':scope >>> #password'),
            targetPage.locator('::-p-aria(Password)')
        ])
            .setTimeout(timeout)
            .fill(password);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ember5'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember5\\"])'),
            targetPage.locator(':scope >>> #ember5'),
            targetPage.locator('::-p-aria(Sign in →)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 295.5,
                y: 5.15625,
              },
            });
            await page.screenshot({path: './results/pagina2.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ember34 circle'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember34\\"]/svg/circle)'),
            targetPage.locator(':scope >>> #ember34 circle')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 7.75,
                y: 4.7491455078125,
              },
            });
            await page.screenshot({path: './results/pagina3.png'})
            const foundText = await page.$eval('body', (element) => {
              return element.textContent.includes('General settings');
          });
          assert.ok(foundText, `The text General settings should be found on the page`);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(1) > li:nth-of-type(3) > a'),
            targetPage.locator('::-p-xpath(//*[@id=\\"publication-language\\"])'),
            targetPage.locator(':scope >>> ul:nth-of-type(1) > li:nth-of-type(3) > a'),
            targetPage.locator('::-p-aria(Publication language)'),
            targetPage.locator('::-p-text(Publication language)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 163.25,
                y: 13.609375,
              },
            });
            await page.screenshot({path: './results/pagina4.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator("[data-testid='publication-language'] span"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"publication-language\\"]/div[2]/div[2]/div/button/span)'),
            targetPage.locator(":scope >>> [data-testid='publication-language'] span")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 12.921875,
                y: 10.109375,
              },
            });
            await page.screenshot({path: './results/pagina5.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#\\:rm\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\":rm:\\"])'),
            targetPage.locator(':scope >>> #\\:rm\\:'),
            targetPage.locator('::-p-aria(Site language)')
        ])
            .setTimeout(timeout)
            .fill('es');
            await page.screenshot({path: './results/pagina6.png'})
            const foundText = await page.$eval('body', (element) => {
              return element.textContent.includes('Default: English');
          });
          assert.ok(foundText, `The text General settings should be found on the page`);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator("[data-testid='publication-language'] button.text-green > span"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"publication-language\\"]/div[2]/div[2]/div/button[2]/span)'),
            targetPage.locator(":scope >>> [data-testid='publication-language'] button.text-green > span"),
            targetPage.locator('::-p-aria(Save) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('::-p-text(Save)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 12.296875,
                y: 12.109375,
              },
            });
            await page.screenshot({path: './results/pagina7.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#admin-x-root'),
            targetPage.locator('::-p-xpath(//*[@id=\\"admin-x-root\\"])'),
            targetPage.locator(':scope >>> #admin-x-root')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 1299,
                y: 651,
              },
            });
            await page.screenshot({path: './results/pagina8.png'})
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
