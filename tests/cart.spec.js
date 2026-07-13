const { test } = require('@playwright/test');

const productPage = require('../pages/productPage');

const cartPage = require('../pages/cartPage');

const Logger = require('../utils/logger');

const environment = require('../config/environment');

const cartData = require('../data/cartData');

test('Verify adding products by price and validating cart details', async ({ page }) => {
    const ProductPage = new productPage(page);
    const CartPage = new cartPage(page);
    let selectedProducts;

    await test.step('Launch Shopping Cart Application',async () => {

        await ProductPage.navigate(environment.baseUrl);

        await ProductPage.waitForProducts();

        Logger.info('Launching Shopping Cart application...');

    });

    await test.step('Add Products To Cart',async () => {

        selectedProducts = await ProductPage.addProductsByPrice(cartData.productPrices);

        Logger.success(`${selectedProducts.length} products added to cart.`);

    });
    
    await test.step(
    'Open Shopping Cart',async () => {

        await CartPage.openCart();

    });

    await test.step('Validate Cart Products',async () => {

        Logger.info('Starting cart validation...');

        await CartPage.validateProducts(selectedProducts);

    });

    await test.step('Validate Total Quantity',async () => {

        await CartPage.validateTotalQuantity(selectedProducts);

    });

    
    await test.step('Validate Grand Total',async () => {

        await CartPage.validateGrandTotal(selectedProducts);

        Logger.success('Cart validation completed successfully.');

    });
});