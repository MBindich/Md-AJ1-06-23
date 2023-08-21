const BasePage = require('./basePage');

class DocsPage extends BasePage {
  get reporterDropdownButton() {
    return $('//*[@id="docusaurus_skipToContent_fallback"]//div[a[text()="Reporter"]]');
  }

  get allureReporterButton() {
    return $('//*[@id="docusaurus_skipToContent_fallback"]//aside//a[text()="Allure Reporter"]/..');
  }

  async clickReporterDropdownButton() {
    await this.reporterDropdownButton.waitForClickable();
    await this.reporterDropdownButton.click();
  }

  async clickAllureReporterButton() {
    await this.allureReporterButton.waitForClickable();
    await this.allureReporterButton.click();
  }
}

module.exports = DocsPage;
