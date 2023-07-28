const { expect } = require('chai');

describe('Webdriver.io language change test', function () {
  it('Should correctly change language', async () => {
    await browser.url('https://webdriver.io/');
    await $('//*[@class="navbar__item dropdown dropdown--hoverable dropdown--right"]').click();
    await $('//ul[@class="dropdown__menu"]/li/a[@lang="uk"]').click();
    const link = await browser.getUrl();
    expect(await link.includes('uk')).to.equal(true);
  });
});
