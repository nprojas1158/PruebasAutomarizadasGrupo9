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
            targetPage.locator('#identification'),
            targetPage.locator('::-p-xpath(//*[@id=\\"identification\\"])'),
            targetPage.locator(':scope >>> #identification'),
            targetPage.locator('::-p-aria(Email address)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 288.5,
                y: 32.84375,
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
                x: 72.5,
                y: 14.15625,
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
            await page.screenshot({path: './results/pagina2.png'})
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
                x: 478.5,
                y: 1.65625,
              },
            });
            await page.screenshot({path: './results/pagina3.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('main > section'),
            targetPage.locator('::-p-xpath(/html/body/div[2]/div/main/section)'),
            targetPage.locator(':scope >>> main > section')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 33,
                y: 815,
              },
            });
            await page.screenshot({path: './results/pagina4.png'})
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
                x: 10.370040893554688,
                y: 17.371337890625,
              },
            });
            await page.screenshot({path: './results/pagina5.png'})
            const foundText = await page.$eval('body', (element) => {
              return element.textContent.includes('General settings');
          });
          assert.ok(foundText, `The text General settings should be found on the page`);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(9) > a'),
            targetPage.locator('::-p-xpath(//*[@id=\\"staff\\"])'),
            targetPage.locator(':scope >>> li:nth-of-type(9) > a'),
            targetPage.locator('::-p-aria(Staff[role=\\"link\\"])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 72.25,
                y: 21.609375,
              },
            });
            await page.screenshot({path: './results/pagina6.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator("[data-testid='users'] > div.items-start span"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"users\\"]/div[2]/div[2]/button/span)'),
            targetPage.locator(":scope >>> [data-testid='users'] > div.items-start span"),
            targetPage.locator('::-p-aria(Invite people) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('::-p-text(Invite people)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 16.09375,
                y: 19.109375,
              },
            });
            await page.screenshot({path: './results/pagina7.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#\\:rn\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\":rn:\\"])'),
            targetPage.locator(':scope >>> #\\:rn\\:'),
            targetPage.locator('::-p-aria(Email address)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 233.5,
                y: 29.359375,
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
            targetPage.locator('::-p-aria(Email address)')
        ])
            .setTimeout(timeout)
            .fill('test_cont@gmail.com');
            await page.screenshot({path: './results/pagina9.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator("[data-testid='invite-user-modal'] > div.flex span"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"invite-user-modal\\"]/div[2]/div[2]/div/button/span)'),
            targetPage.locator(":scope >>> [data-testid='invite-user-modal'] > div.flex span"),
            targetPage.locator('::-p-aria(Send invitation now) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('::-p-text(Send invitation)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 19.578125,
                y: 4.484375,
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
                x: 1054,
                y: 2211,
              },
            });
            await page.screenshot({path: './results/pagina11.png'})
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
