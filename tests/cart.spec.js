const { test } = require('@playwright/test');

const productPage = require('../pages/productPage');

const cartPage = require('../pages/cartPage');

const environment = require('../config/environment');

const cartData = require('../data/cartData');

test('Verify adding products by price and validating cart details', async ({ page }) => {
    const ProductPage = new productPage(page);
    const CartPage = new cartPage(page);
    await ProductPage.navigate(environment.baseUrl);
    await ProductPage.waitForProducts();
    const selectedProducts = await ProductPage.addProductsByPrice(cartData.productPrices);
    await CartPage.openCart();
    await CartPage.validateProducts(selectedProducts);
    await CartPage.validateTotalQuantity(selectedProducts)
    await CartPage.validateGrandTotal(selectedProducts);
});