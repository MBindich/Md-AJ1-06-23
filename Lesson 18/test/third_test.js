const { expect } = require("chai");
const {Builder, By, until} = require("selenium-webdriver");
const { Actions } = require("selenium-webdriver/lib/input");

describe('Chromedriver redirection test', function () {
    let driver;
    before(async () =>{
        driver = new Builder().forBrowser('chrome').build();
        await driver.manage().window().setSize({width: 1920, height: 1080});
    })

    after(async () => {
        await driver.quit();
    })

    it('Result url should contain /mobile-emulation', async () => {
        driver.get('https://chromedriver.chromium.org/home');
        const additionalButton = await driver.wait(until.elementLocated(By.xpath('//nav[@id="WDxLfe"]/ul/li[13]')));
        await additionalButton.click();
        const mobileTestingButton = await driver.wait(until.elementLocated(By.xpath('//nav[@id="WDxLfe"]/ul/li[13]//ul/li[10]//a[@class="aJHbb hDrhEe HlqNPb"]')));
        await mobileTestingButton.click();
        const currentURL = await driver.getCurrentUrl();
        expect(await currentURL.includes('/mobile-emulation')).to.equal(true);
    })
})