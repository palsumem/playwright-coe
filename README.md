# Playwright COE Assignment

## Overview

This project demonstrates an enterprise-grade Playwright automation framework developed in JavaScript using VSCode. The framework has been designed with modular architecture, dependency injection, reusable services, structured reporting, and CI/CD integration to provide a scalable foundation for enterprise UI automation. The design also prepares the framework for future AI- and MCP-based enhancements.

The framework is built using the Page Object Model (POM) design pattern and incorporates enterprise software engineering principles including:

-Base Page abstraction
-Dependency Injection using Playwright Fixtures
-Execution Lifecycle Management
-Environment configuration management
-Externalized test data
-Locator repository pattern
-Service-Oriented Architecture
-Reusable utility layer
-Business-level reporting
-Scalable modular folder structure

The framework has been developed against the React Shopping Cart application.

Application URL:

https://react-shopping-cart-67954.firebaseapp.com

---

## Key Features

- Enterprise Page Object Model (POM) architecture
- Custom Playwright Fixtures with Dependency Injection
- Automatic Execution Lifecycle Management
- Service-Oriented Framework Design
- Externalized Configuration and Test Data
- Centralized Locator Repository
- Reusable Utility Layer
- Business-Level Test Logging
- Playwright HTML Reporting with Execution Metadata
- GitHub Actions CI/CD Integration
- AI-Ready Framework Architecture

---

## Technology Stack

```text
| Component         | Technology                |
|-------------------|---------------------------|
| Automation Tool   | Playwright                |
| Language          | JavaScript                |
| IDE               | VSCode                    |
| Framework Pattern | Page Object Model(POM)    |
| Reporting         | Playwright HTML Report    |
| Configuration     | dotenv                    |
| Package Manager   | npm                       |
|Version Control	| Git / GitHub              |   
|CI/CD	            | GitHub Actions            |
```

---

## Framework Design Principles

The framework has been developed following the following engineering principles:

- Separation of Concerns
- Single Responsibility Principle (SRP)
- Reusability
- Maintainability
- Scalability
- Modularity
- Dependency Injection
- Service-Oriented Design
- Enterprise Readability

---

## Framework Structure

```text
PLAYWRIGHT-COE
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── config/
│   └── environment.js
│
├── data/
│   └── cartData.js
│
├── docs/
│
├── fixtures/
│   └── testFixtures.js
│
├── locators/
│   ├── cartLocators.js
│   └── productLocators.js
│
├── pages/
│   ├── basePage.js
│   ├── productPage.js
│   └── cartPage.js
│
├── services/
│   └── lifecycleServices.js
│
├── tests/
│   └── cart.spec.js
│
├── utils/
│   ├── currencyUtils.js
│   └── logger.js
│
├── playwright-report/
├── test-results/
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
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

Contains reusable helper methods shared across the framework.

Implemented utilities:

- currencyUtils.js
- logger.js

---

### Service Layer

Responsible for encapsulating reusable business services independent of Playwright implementation. Currently used for execution lifecycle metadata and designed to support future AI, reporting, and MCP integrations.

Implemented Service:

- lifecycleServices.js

---

### Fixture Layer

Responsible for dependency injection, shared setup, and execution lifecycle management.

Implemented Fixture:

- testFixtures.js

---

### Page Layer

Encapsulates page-specific functionality.

Pages implemented:

- BasePage
- ProductPage
- CartPage

---

### Test Layer

Contains executable business scenarios using business-level test steps, reusable fixtures, and structured reporting.

Implemented Scenario:

- Verify adding products by price and validating cart details

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
Run Smoke Tests
```bash
npx playwright test --grep "@smoke"
```
Run Regression Tests
```bash
npx playwright test --grep "@regression"
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

## Reporting

The framework provides multiple levels of execution reporting.

### Playwright HTML Report

- Business-level execution steps
- Before/After Hook visibility
- Attachments
- Execution duration

### Execution Metadata

The framework automatically captures:

- Test Title
- Browser
- Execution Start Time
- Execution End Time
- Duration
- Retry Count
- Execution Status
- Error Information

Execution metadata is attached to every test as structured JSON for future reporting, AI analysis, and MCP integration.

### Console Logging

Business-level execution logging provides meaningful runtime information, including:

- Application launch
- Product selection
- Cart validation
- Execution success

---

## Future Enhancements

Potential enhancements include:

MCP Server Integration

AI-assisted Test Generation

AI-assisted Failure Analysis

Azure AI / AWS Bedrock Integration

Enterprise Dashboard Integration

Self-Healing Locator Strategy

Docker-based Execution

API Automation

Accessibility Testing

Visual Regression Testing

Cross-Browser Pipeline Expansion

Allure Reporting

---

## Documentation

Repository Overview (README)
Additional framework documentation is available in the `docs` directory:

- Framework Architecture
- Execution Flow
- Test Plan
- Reporting Strategy
- CI/CD Pipeline
- AI & MCP Integration