class BasePage {
  async navigate(url) {
    await browser.url(url);
  }

  async clickOnElement(element) {
    await element.waitForClickable();
    await element.click();
  }

  async moveToElement(element) {
    await element.waitForClickable();
    await element.moveTo();
  }

  async sendTextToElement(element, text) {
    await element.waitForClickable();
    await element.addValue(text);
  }

  async clearTextFromElement(element) {
    await element.waitForClickable();
    await element.clearValue();
  }

  async waitForAmountOfGoodsChange(initialAmountOfGoods, allGoods) {
    const selector = (await allGoods).selector;

    await browser.waitUntil(async function () {
      const currentAmountOfGoods = await $$(selector).length;
      return (await currentAmountOfGoods) !== initialAmountOfGoods;
    });
  }
}

module.exports = BasePage;
