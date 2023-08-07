const DocsPage = require('./docsPage');

class AllureReporterPage extends DocsPage {
  get pageHeadline() {
    return $('//*[@id="docusaurus_skipToContent_fallback"]//div[@class="theme-doc-markdown markdown"]/header/h1');
  }
}

module.exports = new AllureReporterPage();
