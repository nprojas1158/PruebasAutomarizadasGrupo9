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
                x: 67.5,
                y: 29.84375,
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
                x: 83.5,
                y: 10.15625,
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
                x: 208.5,
                y: 19.65625,
              },
            });
            await page.screenshot({path: './results/pagina4.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ember34 path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember34\\"]/svg/path)'),
            targetPage.locator(':scope >>> #ember34 path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 6.3700408935546875,
                y: 2.371337890625,
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
                y: 18.265625,
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
                x: 182,
                y: 30.609375,
              },
            });
            await page.screenshot({path: './results/pagina7.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#input-ember87'),
            targetPage.locator('::-p-xpath(//*[@id=\\"input-ember87\\"])'),
            targetPage.locator(':scope >>> #input-ember87'),
            targetPage.locator('::-p-aria(Signup heading)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 158,
                y: 15.53125,
              },
            });
            await page.screenshot({path: './results/pagina8.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ember81 > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember81\\"]/div)'),
            targetPage.locator(':scope >>> #ember81 > div')
        ])
            .setTimeout(timeout)
            .click({
              delay: 1521.0999999940395,
              offset: {
                x: 29,
                y: 524.21875,
              },
            });
            await page.screenshot({path: './results/pagina9.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#input-ember87'),
            targetPage.locator('::-p-xpath(//*[@id=\\"input-ember87\\"])'),
            targetPage.locator(':scope >>> #input-ember87'),
            targetPage.locator('::-p-aria(Signup heading)')
        ])
            .setTimeout(timeout)
            .fill(faker.string.symbol(4));
            await page.screenshot({path: './results/pagina10.png'});
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
                x: 22.90625,
                y: 14,
              },
            });
            await page.screenshot({path: './results/pagina11.png'});
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
