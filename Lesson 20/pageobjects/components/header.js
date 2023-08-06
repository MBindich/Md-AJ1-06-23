class Header {
  // //*[@id="__docusaurus"]/nav[@class="navbar navbar--fixed-top"]

  get languageDropdownButton() {
    return $('//*[@class="navbar__item dropdown dropdown--hoverable dropdown--right"]');
  }

  get docsButton() {
    return $('//*[@class="navbar__items"]/a[text()="Docs"]');
  }

  get contributeButton() {
    return $('//div[@class="navbar__items"]/a[text()="Contribute"]');
  }

  get searchButton() {
    return $('//button[@class="DocSearch DocSearch-Button"]');
  }

  async clickDocsButton() {
    await this.docsButton.waitForClickable();
    await this.docsButton.click();
  }

  async clickSearchButton() {
    await this.searchButton.waitForClickable();
    await this.searchButton.click();
  }

  async clickContributeButton() {
    await this.contributeButton.waitForClickable();
    await this.contributeButton.click();
  }

  getLanguageButton(languageName) {
    return $(`//ul[@class="dropdown__menu"]/li/a[@lang="${languageName}"]`);
  }

  async selectLanguageFromDropdown(languageName) {
    await this.languageDropdownButton.waitForClickable();
    await this.languageDropdownButton.click();
    await this.getLanguageButton(languageName).waitForClickable();
    await this.getLanguageButton(languageName).click();
  }
}

module.exports = new Header();
