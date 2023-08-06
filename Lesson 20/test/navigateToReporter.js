const { expect } = require('chai');
const mainPage = require('../pageobjects/mainPage');
const docsPage = require('../pageobjects/docsPage');
const header = require('../pageobjects/components/header');
const allureReporterPage = require('../pageobjects/allureReporterPage');
const docsPage = new docsPage();

describe('Webdriver.io ui navigate to reporter', function () {
  it('Should correctly navigate to Allure Reporter page', async () => {
    await mainPage.navigate('https://webdriver.io/');
    await header.clickDocsButton();
    await docsPage.clickReporterDropdownButton();
    await docsPage.clickAllureReporterButton();
    expect(await allureReporterPage.pageHeadline.getText()).to.equal('Allure Reporter');
  });
});
