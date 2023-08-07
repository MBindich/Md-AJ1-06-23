const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');
const contributePage = require('../pageobjects/contributePage');

Then(/^I expect (.*) text on Contribute page to be (.*)$/, async (elementName, text) => {
  let element;
  switch (elementName) {
    case 'Headline': {
      element = contributePage.pageHeadline;
      expect(await element.getText()).toEqual(text);
      break;
    }
  }
});
