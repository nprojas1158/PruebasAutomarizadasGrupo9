const puppeteer = require('puppeteer'); // v20.7.4 or later
const { email, password, ghost_url } = require('../config.js');
const { faker } = require('@faker-js/faker');
const assert = require('assert');

(async () => {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    const timeout = 25000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1499,
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
                x: 331.5,
                y: 4.84375,
              },
            });
            await page.screenshot({path: './results/pagina.png'});
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
            await page.screenshot({path: './results/pagina1.png'});
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
                x: 261.5,
                y: 12.15625,
              },
            });
            await page.screenshot({path: './results/pagina2.png'});
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
            await page.screenshot({path: './results/pagina3.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ember5 > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember5\\"]/span)'),
            targetPage.locator(':scope >>> #ember5 > span'),
            targetPage.locator('::-p-aria(Sign in →) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('::-p-text(Sign in →)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 265.5,
                y: 7.65625,
              },
            });
            await page.screenshot({path: './results/pagina4.png'});
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
                x: 4.75,
                y: 1.7491455078125,
              },
            });
            const foundText = await page.$eval('body', (element) => {
              return element.textContent.includes('Settings');
          });
          assert.ok(foundText, `The text Settings should be found on the page`);
            await page.screenshot({path: './results/pagina5.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ember54 > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember54\\"]/span)'),
            targetPage.locator(':scope >>> #ember54 > span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 34.671875,
                y: 12.265625,
              },
            });
            await page.screenshot({path: './results/pagina6.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('nav.gh-nav button:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(/html/body/div[2]/div/nav[1]/div/section/div[1]/div/button[2])'),
            targetPage.locator(':scope >>> nav.gh-nav button:nth-of-type(2)'),
            targetPage.locator('::-p-aria(Site-wide)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 183,
                y: 4.609375,
              },
            });
            await page.screenshot({path: './results/pagina7.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#input-ember83'),
            targetPage.locator('::-p-xpath(//*[@id=\\"input-ember83\\"])'),
            targetPage.locator(':scope >>> #input-ember83'),
            targetPage.locator('::-p-aria(Site background color)')
        ])
            .setTimeout(timeout)
            .fill(faker.color.rgb());
            await page.screenshot({path: './results/pagina8.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ember77 > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember77\\"]/span)'),
            targetPage.locator(':scope >>> #ember77 > span'),
            targetPage.locator('::-p-aria(Save) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('::-p-text(Save)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 36.90625,
                y: 26,
              },
            });
            await page.screenshot({path: './results/pagina9.png'});
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
