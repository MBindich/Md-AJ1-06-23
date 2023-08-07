const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');
const allureReporterPage = require('../pageobjects/allureReporterPage');

Then(/^I expect (.*) text on Allure Reporter page to be (.*)$/, async (elementName, text) => {
  let element;
  switch (elementName) {
    case 'Headline': {
      element = allureReporterPage.pageHeadline;
      expect(await element.getText()).toEqual(text);
      break;
    }
  }
});
