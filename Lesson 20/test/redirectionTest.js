const { expect } = require('chai');
const mainPage = require('../pageobjects/mainPage');
const header = require('../pageobjects/components/header');
const contributePage = require('../pageobjects/contributePage');

describe('Webdriver.io ui redirection', function () {
  it('Should correctly redirect to Contribution page', async () => {
    await mainPage.navigate('https://webdriver.io/');
    await header.clickContributeButton();
    expect(await contributePage.pageHeadline.getText()).to.equal('Contribute');
  });
});
