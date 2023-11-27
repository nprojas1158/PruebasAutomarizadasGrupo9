const puppeteer = require('puppeteer'); // v20.7.4 or later
const assert = require('assert');
const { email, password, ghost_url } = require('../config.js');
const { faker } = require('@faker-js/faker');
const { empty_space } = require('../pregenerated_data.js');

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
                x: 149.5,
                y: 10.65625,
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
                x: 110,
                y: 18,
              },
            });
            await page.screenshot({path: './results/pagina5.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ember68 > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember68\\"]/span)'),
            targetPage.locator(':scope >>> #ember68 > span'),
            targetPage.locator('::-p-aria(New tag) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('::-p-text(New tag)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 40.15625,
                y: 29,
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
                x: 137,
                y: 20.671875,
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
            targetPage.locator('::-p-xpath(//*[@id=\\"ember76\\"]/span)'),
            targetPage.locator(':scope >>> div.gh-canvas-header span'),
            targetPage.locator('::-p-aria(Save) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('::-p-text(Save)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 11.21875,
                y: 18,
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
                x: 97,
                y: 12,
              },
            });
            await page.screenshot({path: './results/pagina10.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(3) h3'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember131\\"]/h3)'),
            targetPage.locator(':scope >>> li:nth-of-type(3) h3'),
            targetPage.locator('::-p-aria(test[role=\\"heading\\"])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 125,
                y: 5.671875,
              },
            });
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
                x: 10,
                y: 16.671875,
              },
            });
            await page.screenshot({path: './results/pagina11.png'});
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
            .fill(empty_space);
            await page.screenshot({path: './results/pagina12.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.gh-canvas-header span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember136\\"]/span)'),
            targetPage.locator(':scope >>> div.gh-canvas-header span'),
            targetPage.locator('::-p-aria(Save) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('::-p-text(Save)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 38.21875,
                y: 14,
              },
            });
            await page.screenshot({path: './results/pagina13.png'});
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
