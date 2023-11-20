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
                x: 252.5,
                y: 42.84375,
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
            .click({
              offset: {
                x: 277.5,
                y: 16.15625,
              },
            });
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
            targetPage.locator('#ember5'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember5\\"])'),
            targetPage.locator(':scope >>> #ember5'),
            targetPage.locator('::-p-aria(Sign in →)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 277.5,
                y: 5.15625,
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
                x: 261,
                y: 714,
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
                x: 2.3700408935546875,
                y: 13.371337890625,
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
            targetPage.locator('li:nth-of-type(7) > a'),
            targetPage.locator('::-p-xpath(//*[@id=\\"social-accounts\\"])'),
            targetPage.locator(':scope >>> li:nth-of-type(7) > a'),
            targetPage.locator('::-p-aria(Social accounts[role=\\"link\\"])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 112.25,
                y: 19.609375,
              },
            });
            await page.screenshot({path: './results/pagina6.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator("[data-testid='social-accounts'] span"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"social-accounts\\"]/div[2]/div[2]/div/button/span)'),
            targetPage.locator(":scope >>> [data-testid='social-accounts'] span")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 16.921875,
                y: 15.359375,
              },
            });
            await page.screenshot({path: './results/pagina7.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#\\:rm\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\":rm:\\"])'),
            targetPage.locator(':scope >>> #\\:rm\\:'),
            targetPage.locator("::-p-aria(URL of your publication\\'s Facebook Page)"),
            targetPage.locator('::-p-text(https://www.facebook.com/ghost)')
        ])
            .setTimeout(timeout)
            .fill('https://www.facebook.com/ghost1');
            await page.screenshot({path: './results/pagina8.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#\\:rn\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\":rn:\\"])'),
            targetPage.locator(':scope >>> #\\:rn\\:'),
            targetPage.locator('::-p-aria(URL of your X \\(formerly Twitter\\) profile)'),
            targetPage.locator('::-p-text(https://twitter.com/ghost)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 225.25,
                y: 4.609375,
              },
            });
            await page.screenshot({path: './results/pagina9.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#\\:rn\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\":rn:\\"])'),
            targetPage.locator(':scope >>> #\\:rn\\:'),
            targetPage.locator('::-p-aria(URL of your X \\(formerly Twitter\\) profile)'),
            targetPage.locator('::-p-text(https://twitter.com/ghost)')
        ])
            .setTimeout(timeout)
            .fill('https://twitter.com/ghost1');
            await page.screenshot({path: './results/pagina10.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator("[data-testid='social-accounts'] button.text-green > span"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"social-accounts\\"]/div[2]/div[2]/div/button[2]/span)'),
            targetPage.locator(":scope >>> [data-testid='social-accounts'] button.text-green > span"),
            targetPage.locator('::-p-aria(Save) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('::-p-text(Save)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 12.296875,
                y: 17.359375,
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
                x: 1204,
                y: 300,
              },
            });
            await page.screenshot({path: './results/pagina12.png'})
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
