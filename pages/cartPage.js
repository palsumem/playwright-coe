const { expect } = require('@playwright/test');

const basePage = require('./basePage');

const cartLocators = require('../locators/cartLocators');

const { parsePrice } = require('../utils/currencyUtils');

class cartPage extends basePage {

    constructor(page) {

        super(page);

        this.cartIcon = page.getByTitle(cartLocators.cartIcon);

        this.cartItems = page.locator(cartLocators.cartItems);

        this.cartName = cartLocators.cartName;
        
        this.cartPrice = cartLocators.cartPrice;
        
        this.quantity = cartLocators.quantity;
        
        this.subTotal = cartLocators.subTotal;

    }

    async openCart() {
        await this.click(this.cartIcon);

    }

    async getCartItems() {
        return this.cartItems;
    }

    async getCartCount() {
        return await this.cartItems.count();
    }

    async getCartProductName(item) {
        return await this.getInnerText(item.locator(this.cartName));
    }

    async getCartProductPrice(item) {
       return (await this.getInnerText(item.locator(this.cartPrice))).replace(/\s+/g, '');
    }

    async getQuantity(item) {
        return await this.getInnerText(item.locator(this.quantity));
    }

    async getSubTotal() {
        return (await this.getInnerText(this.page.locator(this.subTotal))).replace(/\s+/g, '');
    }

    async getTotalQuantity() {
        let totalQuantity = 0;
        const cartCount = await this.getCartCount();
        for (let i = 0;i < cartCount;i++) {
            const item = this.cartItems.nth(i);
            const quantityText = await this.getQuantity(item);
            totalQuantity += parseInt(quantityText.replace(/\D/g, ''));
        }
        return totalQuantity;
    }

    async validateProducts(selectedProducts) {
        const cartCount = await this.getCartCount();
        expect(cartCount).toBe(selectedProducts.length);
        for (let i = 0; i < cartCount; i++) {
            const item = this.cartItems.nth(i);
            const name = await this.getCartProductName(item);
            const price = await this.getCartProductPrice(item);
            const quantity = await this.getQuantity(item);
            expect(name).toBe(selectedProducts[i].name);
            expect(price).toBe(selectedProducts[i].price);
            expect(quantity).toContain('Quantity: 1');
        }

    }

    async validateGrandTotal(selectedProducts) {

        let expectedTotal = 0;

        for (const product of selectedProducts) {

            expectedTotal +=parsePrice(product.price);

        }

        const displayedTotal =  parsePrice(await this.getSubTotal());

        expect(displayedTotal).toBeCloseTo(expectedTotal, 2);

    }

    async validateTotalQuantity(selectedProducts) {
    
        const totalQuantity = await this.getTotalQuantity();
        expect(totalQuantity).toBe(selectedProducts.length);
    }
}

module.exports = cartPage;