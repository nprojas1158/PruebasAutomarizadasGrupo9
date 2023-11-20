const puppeteer = require('puppeteer'); // v20.7.4 or later
const assert = require('assert');
const { email, password, ghost_url } = require('../config.js');

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
            targetPage.locator('div.gh-flow > div'),
            targetPage.locator('::-p-xpath(/html/body/div[2]/div/main/div[1]/div)'),
            targetPage.locator(':scope >>> div.gh-flow > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 951.953125,
                y: 382,
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
            .click({
              offset: {
                x: 398.5,
                y: 33.84375,
              },
            });
            await page.screenshot({path: './results/pagina1.png'})
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
                x: 261.5,
                y: 45.15625,
              },
            });
            await page.screenshot({path: './results/pagina2.png'})
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
            targetPage.locator('#ember5 > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember5\\"]/span)'),
            targetPage.locator(':scope >>> #ember5 > span'),
            targetPage.locator('::-p-aria(Sign in →) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('::-p-text(Sign in →)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 270.5,
                y: 22.65625,
              },
            });
            await page.screenshot({path: './results/pagina3.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ember34'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember34\\"])'),
            targetPage.locator(':scope >>> #ember34')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 21,
                y: 34,
              },
            });
            await page.screenshot({path: './results/pagina4.png'})
            const foundText = await page.$eval('body', (element) => {
              return element.textContent.includes('General settings');
          });
          assert.ok(foundText, `The text General settings should be found on the page`);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(1) > li:nth-of-type(4) > a'),
            targetPage.locator('::-p-xpath(//*[@id=\\"metadata\\"])'),
            targetPage.locator(':scope >>> ul:nth-of-type(1) > li:nth-of-type(4) > a'),
            targetPage.locator('::-p-aria(Meta data[role=\\"link\\"])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 119.25,
                y: 11.609375,
              },
            });
            await page.screenshot({path: './results/pagina5.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator("[data-testid='metadata'] span"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"metadata\\"]/div[2]/div[2]/div/button/span)'),
            targetPage.locator(":scope >>> [data-testid='metadata'] span")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 21.921875,
                y: 3.359375,
              },
            });
            await page.screenshot({path: './results/pagina6.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#\\:rm\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\":rm:\\"])'),
            targetPage.locator(':scope >>> #\\:rm\\:'),
            targetPage.locator('::-p-aria(Meta title)')
        ])
            .setTimeout(timeout)
            .fill('Blog');
            await page.screenshot({path: './results/pagina7.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#\\:rn\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\":rn:\\"])'),
            targetPage.locator(':scope >>> #\\:rn\\:'),
            targetPage.locator('::-p-aria(Meta description)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 234.25,
                y: 21.609375,
              },
            });
            await page.screenshot({path: './results/pagina8.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#\\:rn\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\":rn:\\"])'),
            targetPage.locator(':scope >>> #\\:rn\\:'),
            targetPage.locator('::-p-aria(Meta description)')
        ])
            .setTimeout(timeout)
            .fill('story');
            await page.screenshot({path: './results/pagina9.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator("[data-testid='metadata'] button.text-green > span"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"metadata\\"]/div[2]/div[2]/div/button[2]/span)'),
            targetPage.locator(":scope >>> [data-testid='metadata'] button.text-green > span"),
            targetPage.locator('::-p-aria(Save) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('::-p-text(Save)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 12.296875,
                y: 15.359375,
              },
            });
            await page.screenshot({path: './results/pagina10.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#admin-x-settings-content'),
            targetPage.locator('::-p-xpath(//*[@id=\\"admin-x-settings-content\\"])'),
            targetPage.locator(':scope >>> #admin-x-settings-content')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 1064,
                y: 999,
              },
            });
            await page.screenshot({path: './results/pagina11.png'})
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
