const puppeteer = require('puppeteer'); // v20.7.4 or later
const assert = require('assert');
const { email, password, ghost_url } = require('../config.js');
const { faker } = require('@faker-js/faker');

(async () => {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1551,
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
                x: 275.5,
                y: 30.84375,
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
                x: 168.5,
                y: 32.15625,
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
                x: 157.5,
                y: 8.65625,
              },
            });
            await page.screenshot({path: './results/pagina4.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ember29'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember29\\"])'),
            targetPage.locator(':scope >>> #ember29'),
            targetPage.locator('::-p-aria(Tags)'),
            targetPage.locator('::-p-text(Tags)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 121,
                y: 16,
              },
            });
            await page.screenshot({path: './results/pagina5.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ember56 > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember56\\"]/span)'),
            targetPage.locator(':scope >>> #ember56 > span'),
            targetPage.locator('::-p-aria(New tag) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('::-p-text(New tag)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 19.15625,
                y: 27,
              },
            });
            await page.screenshot({path: './results/pagina6.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#tag-name'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tag-name\\"])'),
            targetPage.locator(':scope >>> #tag-name'),
            targetPage.locator('::-p-aria(Name)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 133,
                y: 23.671875,
              },
            });
            await page.screenshot({path: './results/pagina7.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#tag-name'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tag-name\\"])'),
            targetPage.locator(':scope >>> #tag-name'),
            targetPage.locator('::-p-aria(Name)')
        ])
            .setTimeout(timeout)
            .fill('test');
            await page.screenshot({path: './results/pagina8.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.gh-canvas-header span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember63\\"]/span)'),
            targetPage.locator(':scope >>> div.gh-canvas-header span'),
            targetPage.locator('::-p-aria(Save) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('::-p-text(Save)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 13.21875,
                y: 22,
              },
            });
            await page.screenshot({path: './results/pagina9.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ember29'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember29\\"])'),
            targetPage.locator(':scope >>> #ember29'),
            targetPage.locator('::-p-aria([role=\\"navigation\\"]) >>>> ::-p-aria(Tags)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 94,
                y: 25,
              },
            });
            await page.screenshot({path: './results/pagina10.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(2) h3'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember84\\"]/h3)'),
            targetPage.locator(':scope >>> li:nth-of-type(2) h3')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 270,
                y: 16.265625,
              },
            });
            await page.screenshot({path: './results/pagina11.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#tag-description'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tag-description\\"])'),
            targetPage.locator(':scope >>> #tag-description'),
            targetPage.locator('::-p-aria(Description)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 72,
                y: 78.765625,
              },
            });
            await page.screenshot({path: './results/pagina12.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#tag-description'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tag-description\\"])'),
            targetPage.locator(':scope >>> #tag-description'),
            targetPage.locator('::-p-aria(Description)')
        ])
            .setTimeout(timeout)
            .fill(faker.lorem.paragraph());
            await page.screenshot({path: './results/pagina13.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.gh-canvas-header span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember93\\"]/span)'),
            targetPage.locator(':scope >>> div.gh-canvas-header span'),
            targetPage.locator('::-p-aria(Save) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('::-p-text(Save)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 14.21875,
                y: 24,
              },
            });
            await page.screenshot({path: './results/pagina14.png'});
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
