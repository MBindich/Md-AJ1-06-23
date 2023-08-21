const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');
const mainPage = require('../pageobjects/mainPage');

Given('I am on the Main page', async () => {
  await mainPage.navigate('https://webdriver.io/');
});

When(/^I send (.*) text to a search field$/, async (inputText) => {
  await mainPage.sendTextToSearchInputField(inputText);
});

When(/^I click on the first result$/, async () => {
  await mainPage.clickFirstSearchResult();
});

Then(/^I should see (.*) in current url$/, async (language) => {
  const link = await browser.getUrl();
  expect(await link.includes(language)).toEqual(true);
});
