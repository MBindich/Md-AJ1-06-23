const BasePage = require('../basePage');

class TopPanel extends BasePage {
  get loginButton() {
    return $('//*[@id="top-page"]//*[@class="top-panel__userbar__auth"]');
  }

  get username() {
    return $('//*[@class="top-panel__userbar__user__name__inner"]');
  }

  get searchField() {
    return $('//input[@id="top-s"]');
  }

  get searchButton() {
    return $('//*[@id="search-top"]//button[@class="top-panel__search__btn"]');
  }

  get cartButton() {
    return $('//*[@id="top-page"]//a[@class="top-panel__userbar__cart__item"]');
  }

  get profileButton() {
    return $('//*[@class="top-panel__userbar__user__name__inner"]/ancestor::a');
  }
}

module.exports = new TopPanel();
