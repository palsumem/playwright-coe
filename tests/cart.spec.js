const { test, expect } = require('../fixtures/testFixtures');

const Logger = require('../utils/logger');

const cartData = require('../data/cartData');

test.describe('Shopping Cart Tests', () => {
    test('@smoke @regression @cart Verify adding products by price and validating cart details', async ({ productPage, cartPage }) => {
        let selectedProducts;
        
        await test.step('Shopping Cart application is ready...', async () => {

            Logger.info('Shopping Cart application is ready...');

        });

        await test.step('Add Products To Cart', async () => {

            selectedProducts = await productPage.addProductsByPrice(cartData.productPrices);

            Logger.success(`${selectedProducts.length} products added to cart.`);

        });

        await test.step(
            'Open Shopping Cart', async () => {

                await cartPage.openCart();

            });

        await test.step('Validate Cart Products', async () => {

            Logger.info('Starting cart validation...');

            await cartPage.validateProducts(selectedProducts);

        });

        await test.step('Validate Total Quantity', async () => {

            await cartPage.validateTotalQuantity(selectedProducts);

        });


        await test.step('Validate Grand Total', async () => {

            await cartPage.validateGrandTotal(selectedProducts);

            Logger.success('Cart validation completed successfully.');

        });
    });
});