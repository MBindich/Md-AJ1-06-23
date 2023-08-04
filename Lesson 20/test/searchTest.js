const { expect } = require('chai');
const MainPage = require('../pageobjects/mainPage');
const header = require('../pageobjects/components/header');

describe('Webdriver.io search test', function () {
  it('Should get relevant search result', async () => {
    await MainPage.navigate('https://webdriver.io/');
    await header.clickSearchButton();
    await MainPage.sendTextToSearchInputField('get');
    await MainPage.clickFirstSearchResult();
    const link = await browser.getUrl();
    expect(await link.includes('get')).to.equal(true);
  });
});
