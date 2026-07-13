const base = require('@playwright/test');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');
const environment = require('../config/environment');
const lifecycleService = require('../services/lifecycleServices');

exports.test = base.test.extend({
    executionMetadata: [async ({}, use, testInfo) => {
        const startedAt = new Date();


        const startMetadata = lifecycleService.createStartMetadata({
                title: testInfo.title,
                browser: testInfo.project.name,
                startedAt,
                retry: testInfo.retry
            });

        await testInfo.attach('execution-start-metadata',{
            body: Buffer.from(JSON.stringify(startMetadata,null,2)),
            contentType: 'application/json'
            }
        );

        await use(startMetadata);

        const endedAt = new Date();

        const endMetadata = lifecycleService.createEndMetadata({
            title: testInfo.title,
            browser: testInfo.project.name,
            startedAt,
            endedAt,
            status: testInfo.status,
            expectedStatus:
                testInfo.expectedStatus,
            retry: testInfo.retry,
            error: testInfo.error
                ? testInfo.error.message
                : null
        });

        await testInfo.attach('execution-end-metadata',{
            body: Buffer.from(JSON.stringify(endMetadata,null,2)),
            contentType: 'application/json'
            });
        },
        {
            auto: true
        }
    ],

    productPage: async ({ page }, use, testInfo) => {

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