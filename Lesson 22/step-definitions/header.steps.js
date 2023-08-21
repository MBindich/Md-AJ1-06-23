const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');
const header = require('../pageobjects/components/header');
const mainPage = require('../pageobjects/mainPage');

When(/^I click on a (.*) from the dropdown list$/, async (language) => {
  await header.selectLanguageFromDropdown(language);
});

When(/^I click on a (.*) button in header$/, async (buttonName) => {
  switch (buttonName) {
    case 'Docs': {
      await header.clickDocsButton();
      break;
    }
    case 'Contribute': {
      await header.clickContributeButton();
      break;
    }
    case 'Search': {
      await header.clickSearchButton();
      break;
    }
  }
});
