const { expect } = require("chai");
const {Builder, By, until} = require("selenium-webdriver");
const { Actions } = require("selenium-webdriver/lib/input");

describe('Chromedriver basic ui tests', function () {
    let driver;
    before(async () =>{
        driver = new Builder().forBrowser('chrome').build();
        await driver.manage().window().setSize({width: 1920, height: 1080});
    })

    after(async () => {
        await driver.quit();
    })

    it('Main page title should have correct text', async () => {
        driver.get('https://chromedriver.chromium.org/home');
        const mainTitle = await driver.findElement(By.xpath('//h1[@id="h.p_ID_13"]/span'));
        expect(await mainTitle.getText()).to.equal('ChromeDriver');
    })

    it('Navigate to extencions page and check title', async () => {
        driver.get('https://chromedriver.chromium.org/home');
        await driver.findElement(By.xpath('//nav[@id="WDxLfe"]/ul/li[3]//a')).click();
        const extencionsTitle = driver.wait(until.elementLocated(By.xpath('//h1[@id="h.p_ID_13"]/span')));
        new Actions(driver).doubleClick(extencionsTitle).perform();
        expect(await extencionsTitle.getText()).to.equal('Chrome Extensions');
    })
})