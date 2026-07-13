# Playwright COE Assignment

## Overview

This project demonstrates an enterprise-grade Playwright automation framework implemented using JavaScript and VSCode.

The framework follows the Page Object Model (POM) design pattern and incorporates industry best practices including:

- Base Page abstraction
- Environment configuration management
- Externalized test data
- Locator repository pattern
- Utility layer implementation
- Reusable page components
- Scalable folder structure

The framework has been developed against the React Shopping Cart application.

Application URL:

https://react-shopping-cart-67954.firebaseapp.com

---

## Technology Stack

| Component | Technology |
|-----------|------------|
| Automation Tool | Playwright |
| Language | JavaScript |
| IDE | VSCode |
| Framework Pattern | POM |
| Reporting | Playwright HTML Report |
| Configuration | dotenv |
| Package Manager | npm |

---

## Framework Structure

```text
PLAYWRIGHT-COE
│
├── config
│   └── environment.js
│
├── data
│   └── cartData.js
│
├── docs
│
├── locators
│   ├── productLocators.js
│   └── cartLocators.js
│
├── pages
│   ├── BasePage.js
│   ├── ProductPage.js
│   └── CartPage.js
│
├── reports
│
├── tests
│   └── cart.spec.js
│
├── utils
│   └── currencyUtils.js
│
├── .env
├── playwright.config.js
└── package.json
```

---
## Framework Layers

### Config Layer

Responsible for application configuration.

Example:

```javascript
environment.baseUrl
```

---

### Data Layer

Responsible for maintaining test data.

Example:

```javascript
cartData.productPrices
```

---

### Locator Layer

Contains page selectors externalized from Page Objects.

Example:

```javascript
productLocators.products

cartLocators.cartItems
```

---

### Utility Layer

Contains reusable helper methods.

Example:

```javascript
parsePrice()
```

---

### Page Layer

Encapsulates page-specific functionality.

Pages implemented:

- BasePage
- ProductPage
- CartPage

---

### Test Layer

Contains executable business scenarios.

Implemented scenario:

Verify adding products by price and validating cart details.

---
## Test Execution

Install dependencies

```bash
npm install
```

Run all tests

```bash
npx playwright test
```

Run specific test

```bash
npx playwright test tests/cart.spec.js 
```

Run headed

```bash
npx playwright test tests/cart.spec.js --headed
```

Open HTML report

```bash
npx playwright show-report
```

---
## Assumptions

The AUT does not expose individual product subtotals.

The framework validates:

- Product Name
- Product Price
- Quantity
- Total Quantity
- Overall Cart Total

Line item subtotal validation is calculated programmatically.

Quantity is assumed to be one for each added product.

Product selection is based on configured price values.

---

## Future Enhancements

Potential enhancements include:

- GitHub Actions integration
- Allure reporting
- Playwright fixtures
- Docker execution
- MCP integration
- AI-assisted test generation
- Visual testing capabilities