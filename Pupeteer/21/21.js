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
                x: 410.5,
                y: 24.84375,
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
                x: 325.5,
                y: 43.15625,
              },
            });
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
            .fill('%Ad#3MZ~?d"Q)Jd');
            await page.screenshot({path: './results/pagina3.png'})
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
                x: 326.5,
                y: 13.65625,
              },
            });
            await page.screenshot({path: './results/pagina4.png'})
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
                y: 20,
              },
            });
            await page.screenshot({path: './results/pagina5.png'})
            const pageTitle = await page.title();
            assert.strictEqual(pageTitle, 'Tags - Waffles INc', 'Page title is incorrect');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ember58 > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember58\\"]/span)'),
            targetPage.locator(':scope >>> #ember58 > span'),
            targetPage.locator('::-p-aria(New tag) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('::-p-text(New tag)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 58.15625,
                y: 18,
              },
            });
            await page.screenshot({path: './results/pagina6.png'})
            const pageTitle = await page.title();
            assert.strictEqual(pageTitle, 'Waffles INc', 'Page title is incorrect');
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
                x: 188,
                y: 17.671875,
              },
            });
            await page.screenshot({path: './results/pagina6.png'})
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
            .fill('tag_');
            await page.screenshot({path: './results/pagina7.png'})
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('-');
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
            .fill('tag_test');
            await page.screenshot({path: './results/pagina8.png'})
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
                x: 112,
                y: 30.765625,
              },
            });
            await page.screenshot({path: './results/pagina9.png'})
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
            .fill('test');
            await page.screenshot({path: './results/pagina10.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('section > div > div.form-group'),
            targetPage.locator('::-p-xpath(/html/body/div[2]/div/main/section/form/div[2]/section/div/div[2])'),
            targetPage.locator(':scope >>> section > div > div.form-group')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 321,
                y: 287.109375,
              },
            });
            await page.screenshot({path: './results/pagina11.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.gh-canvas-header span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember66\\"]/span)'),
            targetPage.locator(':scope >>> div.gh-canvas-header span'),
            targetPage.locator('::-p-aria(Save) >>>> ::-p-aria([role=\\"generic\\"])'),
            targetPage.locator('::-p-text(Save)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 29.21875,
                y: 25,
              },
            });
            await page.screenshot({path: './results/pagina12.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ember65'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember65\\"])'),
            targetPage.locator(':scope >>> #ember65'),
            targetPage.locator('::-p-aria([role=\\"main\\"]) >>>> ::-p-aria(Tags)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 22,
                y: 8,
              },
            });
            await page.screenshot({path: './results/pagina13.png'})
            const foundText = await page.$eval('body', (element) => {
                return element.textContent.includes('tag_test');
            });

            assert.ok(foundText, `The text tag_test was not found on the page`);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('main li:nth-of-type(3) svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember94\\"]/div/span/svg)'),
            targetPage.locator(':scope >>> main li:nth-of-type(3) svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 1,
                y: 8.96875,
              },
            });
            await page.screenshot({path: './results/pagina14.png'})
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
                x: 53,
                y: 14.546875,
              },
            });
            await page.screenshot({path: './results/pagina15.png'})
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#ember114 > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ember114\\"]/span)'),
            targetPage.locator(':scope >>> #ember114 > span'),
            targetPage.locator('::-p-aria(Delete) >>>> ::-p-aria([role=\\"generic\\"])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 27.5,
                y: 18.8125,
              },
            });
            await page.screenshot({path: './results/pagina16.png'})
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
                x: 738,
                y: 685,
              },
            });
            await page.screenshot({path: './results/pagina17.png'})
            const foundText = await page.$eval('body', (element) => {
              return element.textContent.includes('tag_test');
          });
          assert.ok(!foundText, `The text tag_test should not be found on the page`);
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
