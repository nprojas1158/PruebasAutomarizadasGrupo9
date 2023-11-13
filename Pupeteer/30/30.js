const puppeteer = require('puppeteer'); // v20.7.4 or later
const assert = require('assert');

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
        await targetPage.goto('http://localhost:2368/ghost/#/signin');
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
                x: 244.5,
                y: 34.84375,
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
            .fill('jd.lugo@uniandes.edu.co');
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
                x: 150.5,
                y: 12.15625,
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
            .fill('%Ad#3MZ~?d"Q)Jd');
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
                x: 242.5,
                y: 25.65625,
              },
            });
            await page.screenshot({path: './results/pagina3.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('nav.gh-nav section'),
            targetPage.locator('::-p-xpath(/html/body/div[2]/div/nav[1]/div/section)'),
            targetPage.locator(':scope >>> nav.gh-nav section')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 284,
                y: 733,
              },
            });
            await page.screenshot({path: './results/pagina4.png'})
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
                x: 4,
                y: 2,
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
                x: 94.25,
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
                x: 64.09375,
                y: 18.109375,
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
                x: 108.5,
                y: 21.359375,
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
            .fill('test_admin@gmail.com');
            await page.screenshot({path: './results/pagina9.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('label:nth-of-type(2) span.text-md'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"invite-user-modal\\"]/div[1]/div/div[2]/div/div/label[2]/div/span[1])'),
            targetPage.locator(':scope >>> label:nth-of-type(2) span.text-md')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 12.5,
                y: 19.609375,
              },
            });
            await page.screenshot({path: './results/pagina10.png'})
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
                x: 44.578125,
                y: 3.484375,
              },
            });
            await page.screenshot({path: './results/pagina11.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#admin-x-root'),
            targetPage.locator('::-p-xpath(//*[@id=\\"admin-x-root\\"])'),
            targetPage.locator(':scope >>> #admin-x-root')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 1265,
                y: 678,
              },
            });
            await page.screenshot({path: './results/pagina12.png'})
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
