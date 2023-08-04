const BasePage = require('./basePage');

class ContributePage extends BasePage {
  get pageHeadline() {
    return $('//div[@class="theme-doc-markdown markdown"]//h1');
  }
}

module.exports = new ContributePage();
