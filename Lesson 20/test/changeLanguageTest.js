const { expect } = require('chai');
const mainPage = require('../pageobjects/mainPage');
const header = require('../pageobjects/components/header');

const languages = ['de', 'es', 'hi', 'fr', 'uk', 'fa', 'ta'];

describe('Webdriver.io language change test', function () {
  languages.forEach((language) => {
    it(`Should correctly change language to ${language}`, async () => {
      await mainPage.navigate('https://webdriver.io/');
      await header.selectLanguageFromDropdown(language);
      const link = await browser.getUrl();
      expect(await link.includes(language)).to.equal(true);
    });
  });
});
