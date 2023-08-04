const { expect } = require('chai');
const MainPage = require('../pageobjects/mainPage');
const DocsPage = require('../pageobjects/docsPage');
const header = require('../pageobjects/components/header');
const allureReporterPage = require('../pageobjects/allureReporterPage');

describe('Webdriver.io ui navigate to reporter', function () {
  it('Should correctly navigate to Allure Reporter page', async () => {
    const docsPage = new DocsPage();
    await MainPage.navigate('https://webdriver.io/');
    await header.docsButton.click();
    await docsPage.clickReporterDropdownButton();
    await docsPage.clickAllureReporterButton();
    expect(await allureReporterPage.pageHeadline.getText()).to.equal('Allure Reporter');
  });
});
