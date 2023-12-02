const puppeteer = require('puppeteer'); // v20.7.4 or later
const { email, password, ghost_url } = require('../config.js');
const { empty_space } = require('../pregenerated_data.js');
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
                x: 191.5,
                y: 31.84375,
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
                x: 234.5,
                y: 12.65625,
              },
            });
            await page.screenshot({path: './results/pagina4.png'});
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
                x: 22,
                y: 32,
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
            targetPage.locator('#ember54 h4'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember54\\"]/div/h4)'),
            targetPage.locator(':scope >>> #ember54 h4'),
            targetPage.locator('::-p-aria(Design)'),
            targetPage.locator('::-p-text(Design)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 16.671875,
                y: 9.265625,
              },
            });
            await page.screenshot({path: './results/pagina6.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('nav.gh-nav button:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(/html/body/div[2]/div/nav[1]/div/section/div[1]/div/button[1])'),
            targetPage.locator(':scope >>> nav.gh-nav button:nth-of-type(1)'),
            targetPage.locator('::-p-aria(Brand)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 177,
                y: 1,
              },
            });
            await page.screenshot({path: './results/pagina7.png'});
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
              delay: 1645.300000011921,
              offset: {
                x: 29,
                y: 49.609375,
              },
            });
            await page.screenshot({path: './results/pagina8.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#site-description'),
            targetPage.locator('::-p-xpath(//*[@id=\\"site-description\\"])'),
            targetPage.locator(':scope >>> #site-description'),
            targetPage.locator('::-p-aria(Site description)'),
            targetPage.locator('::-p-text(Thoughts, stories)')
        ])
            .setTimeout(timeout)
            .fill(empty_space);
            await page.screenshot({path: './results/pagina9.png'});
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
                x: 54.90625,
                y: 15,
              },
            });
            await page.screenshot({path: './results/pagina10.png'});
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
