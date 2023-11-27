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
                x: 192.5,
                y: 4.65625,
              },
            });
            await page.screenshot({path: './results/pagina4.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ember34 > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember34\\"]/svg)'),
            targetPage.locator(':scope >>> #ember34 > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 2,
                y: 18,
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
            targetPage.locator('#ember53 p'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember53\\"]/div/p)'),
            targetPage.locator(':scope >>> #ember53 p'),
            targetPage.locator('::-p-aria(General Basic publication details and site metadata) >>>> ::-p-aria([role=\\"paragraph\\"])'),
            targetPage.locator('::-p-text(Basic publication)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 130,
                y: 11.765625,
              },
            });
            await page.screenshot({path: './results/pagina6.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(2) > section > div:nth-of-type(1) span'),
            targetPage.locator('::-p-xpath(/html/body/div[2]/div/main/section/div[2]/div[2]/section/div[1]/div[1]/button/span)'),
            targetPage.locator(':scope >>> div:nth-of-type(2) > section > div:nth-of-type(1) span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 50.3125,
                y: 17.640625,
              },
            });
            await page.screenshot({path: './results/pagina7.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#metaTitle'),
            targetPage.locator('::-p-xpath(//*[@id=\\"metaTitle\\"])'),
            targetPage.locator(':scope >>> #metaTitle'),
            targetPage.locator('::-p-aria(Meta title)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 48,
                y: 7.03125,
              },
            });
            await page.screenshot({path: './results/pagina8.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#metaTitle'),
            targetPage.locator('::-p-xpath(//*[@id=\\"metaTitle\\"])'),
            targetPage.locator(':scope >>> #metaTitle'),
            targetPage.locator('::-p-aria(Meta title)')
        ])
            .setTimeout(timeout)
            .fill(faker.string.symbol(5));
            await page.screenshot({path: './results/pagina9.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.gh-canvas-header span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember68\\"]/span)'),
            targetPage.locator(':scope >>> div.gh-canvas-header span'),
            targetPage.locator('::-p-aria(Save) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('::-p-text(Save)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 45.21875,
                y: 7,
              },
            });
            await page.screenshot({path: './results/pagina10.png'});
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
