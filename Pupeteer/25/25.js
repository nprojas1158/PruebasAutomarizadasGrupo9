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
      await page.screenshot({path: './results/pagina.png'})
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
                x: 470.5,
                y: 27.84375,
              },
            });
            await page.screenshot({path: './results/pagina1.png'})
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
            await page.screenshot({path: './results/pagina2.png'})
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
                x: 223.5,
                y: 26.15625,
              },
            });
            await page.screenshot({path: './results/pagina3.png'})
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
                x: 294.5,
                y: 16.65625,
              },
            });
            await page.screenshot({path: './results/pagina4.png'})
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
                x: 30,
                y: 692,
              },
            });
            await page.screenshot({path: './results/pagina5.png'})
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
                x: 6.75,
                y: 2.7491455078125,
              },
            });
            await page.screenshot({path: './results/pagina6.png'})
            const foundText = await page.$eval('body', (element) => {
              return element.textContent.includes('General settings');
          });
          assert.ok(foundText, `The text General settings should be found on the page`);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('ul:nth-of-type(1) > li:nth-of-type(2) > a'),
            targetPage.locator('::-p-xpath(//*[@id=\\"timezone\\"])'),
            targetPage.locator(':scope >>> ul:nth-of-type(1) > li:nth-of-type(2) > a'),
            targetPage.locator('::-p-aria(Timezone)'),
            targetPage.locator('::-p-text(Timezone)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 119.25,
                y: 23.609375,
              },
            });
            await page.screenshot({path: './results/pagina7.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator("[data-testid='timezone'] > div.items-start span"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"timezone\\"]/div[2]/div[2]/div/button/span)'),
            targetPage.locator(":scope >>> [data-testid='timezone'] > div.items-start span")
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 24.921875,
                y: 0.859375,
              },
            });
            await page.screenshot({path: './results/pagina8.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.css-n9qnu9'),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"timezone-select\\"]/div/div/div[1]/div[2])'),
            targetPage.locator(':scope >>> div.css-n9qnu9')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 319.25,
                y: 0.984375,
              },
            });
            await page.screenshot({path: './results/pagina9.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#\\:rm\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\":rm:\\"])'),
            targetPage.locator(':scope >>> #\\:rm\\:'),
            targetPage.locator('::-p-aria(Site timezone[role=\\"combobox\\"])')
        ])
            .setTimeout(timeout)
            .fill('5');
            await page.screenshot({path: './results/pagina10.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#react-select-2-option-11'),
            targetPage.locator('::-p-xpath(//*[@id=\\"react-select-2-option-11\\"])'),
            targetPage.locator(':scope >>> #react-select-2-option-11')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 167.25,
                y: 4.109375,
              },
            });
            await page.screenshot({path: './results/pagina11.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator("[data-testid='timezone'] button.text-green > span"),
            targetPage.locator('::-p-xpath(//*[@data-testid=\\"timezone\\"]/div[2]/div[2]/div/button[2]/span)'),
            targetPage.locator(":scope >>> [data-testid='timezone'] button.text-green > span"),
            targetPage.locator('::-p-aria(Save) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('::-p-text(Save)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 24.296875,
                y: 7.859375,
              },
            });
            await page.screenshot({path: './results/pagina12.png'})
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
                x: 1270,
                y: 793,
              },
            });
            await page.screenshot({path: './results/pagina13.png'})
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
