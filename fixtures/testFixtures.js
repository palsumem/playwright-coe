const base = require('@playwright/test');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');
const environment = require('../config/environment');

exports.test = base.test.extend({

    productPage: async ({ page }, use) => {
        const productPage = new ProductPage(page);
        
        await productPage.navigate(environment.baseUrl);

        await productPage.waitForProducts();

        await use(productPage);

    },

    cartPage: async ({ page }, use) => {

        const cartPage = new CartPage(page);

        await use(cartPage);

    }

});

exports.expect = base.expect;