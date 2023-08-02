const { expect } = require("chai");
const {Builder, By, until} = require("selenium-webdriver");

describe('Chromedriver search test', function () {
    let driver;
    before(async () =>{
        driver = new Builder().forBrowser('chrome').build();
        await driver.manage().window().setSize({width: 1920, height: 1080});
    })

    after(async () => {
        await driver.quit();
    })

    it('First search result shoud contain driver in it`s link', async () => {
        driver.get('https://chromedriver.chromium.org/home');
        await driver.findElement(By.xpath('//div[@class="U26fgb mUbCce fKz7Od iWs3gf Wdnjke M9Bg4d"]')).click();
        await driver.findElement(By.xpath('//*[@id="yDmH0d"]//input')).sendKeys('driver');
        await driver.findElement(By.xpath('//*[@id="yDmH0d"]//div[@class="U26fgb mUbCce fKz7Od i3PoXe M9Bg4d"]')).click();
        const firstResult = await driver.wait(until.elementLocated(By.xpath('//*[@id="yDmH0d"]//div[@class="DLXGJd"]//a[@data-position="1"]')));
        const link = await firstResult.getAttribute("href");
        expect(await link.includes('driver')).to.equal(true);
    })
})