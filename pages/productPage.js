const basePage = require('./basePage');

const productLocators = require('../locators/productLocators');

class productPage extends basePage {

    constructor(page) {
        super(page);

    this.products = page.locator(productLocators.products);

    this.productName = productLocators.productName;

    this.productPrice = productLocators.productPrice;

    this.addButton = productLocators.addButton;

    this.closeButton = productLocators.closeButton;

    }

    async getProducts() {
        return this.products;
    }

    async getProductCount() {
        return await this.products.count();
    }

    async getProductName(product) {
    return await this.getText(
        product.locator(this.productName));
    }

    async getProductPrice(product) {
    return await this.getText(
        product.locator(this.productPrice));
    }

    async addProductToCart(product) {

        const addButton = product.getByRole('button', { name: this.addButton });
        await this.scrollTo(product);
        await this.waitForElement(addButton);
        await this.click(addButton);
    }

    async closeCart() {

        const closeButton =this.page.locator(this.closeButton);
        if (await this.isVisible(closeButton)) {
            await this.click(closeButton);
        }
    }

    async addProductsByPrice(prices) {
        
        const selectedProducts = [];
        const productCount = await this.getProductCount();
        for (let i = 0; i < productCount; i++) {
            const product = this.products.nth(i);
            const name = await this.getProductName(product);
            const price = await this.getProductPrice(product);
            if (prices.includes(price)) {
                selectedProducts.push({name,price});
                await this.addProductToCart(product);
                await this.closeCart();
            }
        }

        return selectedProducts;

    }

    async waitForProducts() {
        await this.waitForElement(this.products.first());
    }

}

module.exports = productPage;