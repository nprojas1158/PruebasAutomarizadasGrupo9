const puppeteer = require('puppeteer'); // v20.7.4 or later
const assert = require('assert');
const { email, password, ghost_url } = require('../config.js');
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
                x: 233.5,
                y: 26.65625,
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
                y: 3.7491455078125,
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
                x: 136,
                y: 13.765625,
              },
            });
            await page.screenshot({path: './results/pagina6.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) span'),
            targetPage.locator('::-p-xpath(/html/body/div[2]/div/main/section/div[2]/div[2]/section/div[4]/div[1]/button/span)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 2.3125,
                y: 17.609375,
              },
            });
            await page.screenshot({path: './results/pagina7.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(1) > input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember97\\"]/div/div[1]/input)'),
            targetPage.locator(':scope >>> div:nth-of-type(1) > input'),
            targetPage.locator("::-p-aria(URL of your publication\\'s Facebook Page)"),
            targetPage.locator('::-p-text(https://www.facebook.com/ghost)')
        ])
            .setTimeout(timeout)
            .click({
              delay: 372.80000001192093,
              offset: {
                x: 311,
                y: 9.4375,
              },
            });
            await page.screenshot({path: './results/pagina8.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(1) > input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember97\\"]/div/div[1]/input)'),
            targetPage.locator(':scope >>> div:nth-of-type(1) > input'),
            targetPage.locator("::-p-aria(URL of your publication\\'s Facebook Page)"),
            targetPage.locator('::-p-text(https://www.facebook.com/ghost)')
        ])
            .setTimeout(timeout)
            .fill(empty_space);
            await page.screenshot({path: './results/pagina9.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ember97 > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember97\\"]/div)'),
            targetPage.locator(':scope >>> #ember97 > div')
        ])
            .setTimeout(timeout)
            .click({
              delay: 482.59999999403954,
              offset: {
                x: 273,
                y: 105.4375,
              },
            });
            await page.screenshot({path: './results/pagina10.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(2) > input'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember97\\"]/div/div[2]/input)'),
            targetPage.locator(':scope >>> div:nth-of-type(2) > input'),
            targetPage.locator("::-p-aria(URL of your publication\\'s Twitter profile)"),
            targetPage.locator('::-p-text(https://twitter.com/ghost)')
        ])
            .setTimeout(timeout)
            .fill(empty_space);
            await page.screenshot({path: './results/pagina11.png'});
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
                x: 27.21875,
                y: 14,
              },
            });
            await page.screenshot({path: './results/pagina12.png'});
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
