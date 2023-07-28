const {expect} = require('chai')

describe('Webdriver.io ui redirection', function () {
    it('Should redirect correctly', async () => {
        await browser.url('https://webdriver.io/');
        await $('//div[@class="navbar__items"]/a[text()="Contribute"]').click();
        const pageHeader = await $('//div[@class="theme-doc-markdown markdown"]//h1').getText();
        expect(pageHeader).to.equal("Contribute");
    })
});