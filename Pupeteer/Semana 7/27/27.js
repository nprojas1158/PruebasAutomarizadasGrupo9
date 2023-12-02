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
                x: 213.5,
                y: 18.65625,
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
                x: 8.370040893554688,
                y: 4.371337890625,
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
            targetPage.locator('#ember82 h4'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember82\\"]/div/h4)'),
            targetPage.locator(':scope >>> #ember82 h4'),
            targetPage.locator('::-p-aria(Staff)'),
            targetPage.locator('::-p-text(Staff)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 69,
                y: 15.265625,
              },
            });
            await page.screenshot({path: './results/pagina6.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('section > button > span'),
            targetPage.locator('::-p-xpath(/html/body/div[2]/div/main/section/div/header/section/button/span)'),
            targetPage.locator(':scope >>> section > button > span'),
            targetPage.locator('::-p-aria(Invite people) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('::-p-text(Invite people)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 45.515625,
                y: 17,
              },
            });
            await page.screenshot({path: './results/pagina7.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(3) > div.gh-radio-button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember305\\"]/div/div[1]/fieldset/div[2]/div[3]/div[1])'),
            targetPage.locator(':scope >>> div:nth-of-type(3) > div.gh-radio-button')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 12.5,
                y: 11.265625,
              },
            });
            await page.screenshot({path: './results/pagina8.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#new-user-email'),
            targetPage.locator('::-p-xpath(//*[@id=\\"new-user-email\\"])'),
            targetPage.locator(':scope >>> #new-user-email'),
            targetPage.locator('::-p-aria(Email address)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 179.5,
                y: 25.625,
              },
            });
            await page.screenshot({path: './results/pagina9.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#new-user-email'),
            targetPage.locator('::-p-xpath(//*[@id=\\"new-user-email\\"])'),
            targetPage.locator(':scope >>> #new-user-email'),
            targetPage.locator('::-p-aria(Email address)')
        ])
            .setTimeout(timeout)
            .fill(faker.internet.email());
            await page.screenshot({path: './results/pagina10.png'});
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ember305 > div span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember312\\"]/span)'),
            targetPage.locator(':scope >>> #ember305 > div span'),
            targetPage.locator('::-p-aria(Send invitation now →) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('::-p-text(Send invitation)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 28,
                y: 4.296875,
              },
            });
            await page.screenshot({path: './results/pagina11.png'});
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
