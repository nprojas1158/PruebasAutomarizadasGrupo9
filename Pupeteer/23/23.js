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
                x: 206.5,
                y: 35.84375,
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
                x: 293.5,
                y: 21.15625,
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
                x: 268.5,
                y: 20.65625,
              },
            });
            await page.screenshot({path: './results/pagina2.png'})
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
                x: 0,
                y: 15,
              },
            });
            await page.screenshot({path: './results/pagina3.png'})
            const foundText = await page.$eval('body', (element) => {
              return element.textContent.includes('General settings');
          });
          assert.ok(foundText, `The text General settings should be found on the page`);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator("[data-testid='title-and-description'] span"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"title-and-description\\"]/div[2]/div[2]/div/button/span)'),
            targetPage.locator(":scope >>> [data-testid='title-and-description'] span")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 14.921875,
                y: 18.609375,
              },
            });
            await page.screenshot({path: './results/pagina4.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#\\:rm\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\":rm:\\"])'),
            targetPage.locator(':scope >>> #\\:rm\\:'),
            targetPage.locator('::-p-aria(Site title)')
        ])
            .setTimeout(timeout)
            .fill('Waffles INc');
            await page.screenshot({path: './results/pagina5.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator("[data-testid='title-and-description'] button.text-green > span"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"title-and-description\\"]/div[2]/div[2]/div/button[2]/span)'),
            targetPage.locator(":scope >>> [data-testid='title-and-description'] button.text-green > span"),
            targetPage.locator('::-p-aria(Save) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('::-p-text(Save)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 21.296875,
                y: 2.609375,
              },
            });
            await page.screenshot({path: './results/pagina6.png'})
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
                x: 1287,
                y: 757,
              },
            });
            await page.screenshot({path: './results/pagina7.png'})
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
