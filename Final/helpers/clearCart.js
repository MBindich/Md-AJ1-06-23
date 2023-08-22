const checkoutPage = require("../pageobjects/checkoutPage");
const topPanel = require("../pageobjects/components/topPanel");

async function clearCart() {
    await topPanel.clickOnCartButton();

    await checkoutPage.checkSelectAllItems();
    await checkoutPage.clickOnRemoveItemsButton();
    await checkoutPage.clickOnConfirmRemoveItemsButton();
}

module.exports = clearCart;
