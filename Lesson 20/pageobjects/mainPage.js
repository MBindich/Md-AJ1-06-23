const BasePage = require('./basePage');

class MainPage extends BasePage {
  get searchInputField() {
    return $('//*[@id="docsearch-input"]');
  }

  get firstSearchResult() {
    return $('//*[@id="docsearch-item-0"]/a');
  }

  async sendTextToSearchInputField(searchText) {
    await this.searchInputField.addValue(searchText);
  }

  async clickFirstSearchResult() {
    await this.firstSearchResult.waitForClickable();
    await this.firstSearchResult.click();
  }
}

module.exports = new MainPage();
