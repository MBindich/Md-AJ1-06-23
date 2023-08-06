const { expect } = require('chai');

describe('Webdriver.io ui navigate to reporter', function () {
  it('Should navigate to correct page', async () => {
    await browser.url('https://webdriver.io/');
    await $('//*[@class="navbar__items"]/a[text()="Docs"]').click();
    await $('//*[@id="docusaurus_skipToContent_fallback"]//div[a[text()="Reporter"]]').click();
    await $('//*[@id="docusaurus_skipToContent_fallback"]//aside//a[text()="Allure Reporter"]/..').click();
    const pageHeader = await $('//*[@id="docusaurus_skipToContent_fallback"]//div[@class="theme-doc-markdown markdown"]/header/h1').getText();
    expect(pageHeader).to.equal('Allure Reporter');
  });
});
