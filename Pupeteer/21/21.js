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
                x: 243.5,
                y: 33.84375,
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
                x: 118.5,
                y: 46.15625,
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
                x: 284.5,
                y: 32.65625,
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
                x: 98,
                y: 8,
              },
            });
            await page.screenshot({path: './results/pagina4.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('section > section span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember59\\"]/span)'),
            targetPage.locator(':scope >>> section > section span'),
            targetPage.locator('::-p-aria(Create a new tag) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('::-p-text(Create a new)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 104.0625,
                y: 7.859375,
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
                x: 54,
                y: 18.671875,
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
            .fill('a');
            await page.screenshot({path: './results/pagina7.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#tag-slug'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tag-slug\\"])'),
            targetPage.locator(':scope >>> #tag-slug'),
            targetPage.locator('::-p-aria(Slug)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 52,
                y: 28.21875,
              },
            });
            await page.screenshot({path: './results/pagina8.png'});
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
                x: 389,
                y: 72.765625,
              },
            });
            await page.screenshot({path: './results/pagina9.png'});
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
            .fill('aa');
            await page.screenshot({path: './results/pagina10.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.gh-main-section > section > div'),
            targetPage.locator('::-p-xpath(/html/body/div[2]/div/main/section/form/div[2]/section/div)'),
            targetPage.locator(':scope >>> div.gh-main-section > section > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 740,
                y: 411.109375,
              },
            });
            await page.screenshot({path: './results/pagina11.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.gh-canvas-header span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember61\\"]/span)'),
            targetPage.locator(':scope >>> div.gh-canvas-header span'),
            targetPage.locator('::-p-aria(Save) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('::-p-text(Save)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 28.21875,
                y: 19,
              },
            });
            await page.screenshot({path: './results/pagina12.png'});
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
                x: 186,
                y: 15,
              },
            });
            await page.screenshot({path: './results/pagina13.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ember82'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember82\\"])'),
            targetPage.locator(':scope >>> #ember82'),
            targetPage.locator('::-p-aria(a aa)'),
            targetPage.locator('::-p-text(a\n        \n )')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 341,
                y: 37.8125,
              },
            });
            await page.screenshot({path: './results/pagina14.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('main > section > div span'),
            targetPage.locator('::-p-xpath(/html/body/div[2]/div/main/section/div/button/span)'),
            targetPage.locator(':scope >>> main > section > div span'),
            targetPage.locator('::-p-aria(Delete tag) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('::-p-text(Delete tag)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 28,
                y: 12.25,
              },
            });
            await page.screenshot({path: './results/pagina15.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ember105 > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember105\\"]/span)'),
            targetPage.locator(':scope >>> #ember105 > span'),
            targetPage.locator('::-p-aria(Delete) >>>> ::-p-aria([role=\\"generic\\"])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 47.5,
                y: 3.8125,
              },
            });
            await page.screenshot({path: './results/pagina16.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('main li'),
            targetPage.locator('::-p-xpath(/html/body/div[2]/div/main/section/section/ol/li)'),
            targetPage.locator(':scope >>> main li'),
            targetPage.locator('::-p-aria([role=\\"main\\"]) >>>> ::-p-aria([role=\\"listitem\\"])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 967,
                y: 641.40625,
              },
            });
            await page.screenshot({path: './results/pagina17.png'});
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
