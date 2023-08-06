const { expect } = require('chai');
const mainPage = require('../pageobjects/mainPage');
const header = require('../pageobjects/components/header');

describe('Webdriver.io search test', function () {
  it('Should get relevant search result', async () => {
    await mainPage.navigate('https://webdriver.io/');
    await header.clickSearchButton();
    await mainPage.sendTextToSearchInputField('get');
    await mainPage.clickFirstSearchResult();
    const link = await browser.getUrl();
    expect(await link.includes('get')).to.equal(true);
  });
});
