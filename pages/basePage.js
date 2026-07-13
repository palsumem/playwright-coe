class basePage {

    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async click(locator) {
        await locator.click();
    }

    async fill(locator, value) {
        await locator.fill(value);
    }

    async getText(locator) {
        return (await locator.textContent()).trim();
    }

    async getInnerText(locator) {
        return (await locator.innerText()).trim();
    }

    async isVisible(locator) {
        return await locator.isVisible();
    }

    async waitForElement(locator) {
        await locator.waitFor({
            state: 'visible'
        });
    }

    async scrollTo(locator) {
        await locator.scrollIntoViewIfNeeded();
    }

    async getCount(locator) {
        return await locator.count();
    }

    async hover(locator) {
        await locator.hover();
    }

    async getAttribute(locator, attribute) {
        return await locator.getAttribute(attribute);
    }

}

module.exports = basePage;