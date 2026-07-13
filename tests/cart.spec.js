const { test } = require('@playwright/test');

const productPage = require('../pages/productPage');

const cartPage = require('../pages/cartPage');

const Logger = require('../utils/logger');

const environment = require('../config/environment');

const cartData = require('../data/cartData');

test('Verify adding products by price and validating cart details', async ({ page }) => {
    const ProductPage = new productPage(page);
    const CartPage = new cartPage(page);
    await ProductPage.navigate(environment.baseUrl);
    await ProductPage.waitForProducts();
    Logger.info('Launching Shopping Cart application...');
    const selectedProducts = await ProductPage.addProductsByPrice(cartData.productPrices);
    Logger.success(`${selectedProducts.length} products added to cart.`);
    await CartPage.openCart();
    Logger.info('Starting cart validation...');
    await CartPage.validateProducts(selectedProducts);
    await CartPage.validateTotalQuantity(selectedProducts)
    await CartPage.validateGrandTotal(selectedProducts);
    Logger.success('Cart validation completed successfully.');
});