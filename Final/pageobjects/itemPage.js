const BasePage = require('./basePage');

class ItemPage extends BasePage {
  get itemName() {
    return $('//*[@id="top-page"]//h1[@itemprop="name"]');
  }

  get addToCartButton() {
    return $('button.addtocart-btn');
  }

  get yearOfRelease() {
    return $('//*[@id="top-page"]//meta[@itemprop="datePublished"]/ancestor::td');
  }

  get languageOfBook() {
    return $('//*[@id="top-page"]//td[text()="Язык"]/following-sibling::td');
  }

  async getLanguageOfBook() {
    const language = await this.languageOfBook;
    await language.waitForDisplayed();
    return language.getText();
  }

  async getYearOfRelease() {
    const year = await this.yearOfRelease;
    await year.waitForDisplayed();
    return year.getText();
  }
}

module.exports = new ItemPage();
