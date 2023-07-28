const { expect } = require('chai');

describe('Webdriver.io search test', function () {
  it('Should get relevant search result', async () => {
    await browser.url('https://webdriver.io/');
    await $('//button[@class="DocSearch DocSearch-Button"]').click();
    await $('//*[@id="docsearch-input"]').addValue('get');
    await $('//*[@id="docsearch-item-0"]/a').click();
    const link = await browser.getUrl();
    expect(await link.includes('get')).to.equal(true);
  });
});
