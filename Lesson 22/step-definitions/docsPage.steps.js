const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');
const DocsPage = require('../pageobjects/docsPage');
const docsPage = new DocsPage();

Given('I am on the Docs page', async () => {
  await mainPage.navigate('https://webdriver.io/docs/gettingstarted');
});

When(/^I click on a (.*) button$/, async (buttonName) => {
  switch (buttonName) {
    case 'Reporter dropdown': {
      await docsPage.clickReporterDropdownButton();
      break;
    }
    case 'Allure Reporter': {
      await docsPage.clickAllureReporterButton();
      break;
    }
  }
});
