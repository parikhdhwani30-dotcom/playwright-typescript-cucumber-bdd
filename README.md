# Playwright TypeScript Cucumber BDD Framework
**Author:** Dhwani Parikh  
**Technology Stack:** TypeScript, Playwright, @cucumber/cucumber 10, Gherkin, Custom World, Multi-Worker Parallel Execution

---

## 1. Overview
This repository contains a modern **BDD Automation Framework** pairing the speed and reliability of **Playwright** with the business readability of **Cucumber BDD** in **TypeScript**.

Target Application under test: [SauceDemo E-Commerce](https://www.saucedemo.com/)

---

## 2. Key Architectural Highlights
- **Custom World (`custom-world.ts`):** Implements Cucumber's `setWorldConstructor` to share Playwright `Browser`, `BrowserContext`, and `Page` instances across step definitions cleanly.
- **Multi-Worker Parallelism:** Configured via `cucumber.js` with `parallel: 2` (or `--parallel 3` CLI flag) to run separate scenarios simultaneously across multiple Playwright browser contexts.
- **Robust Cucumber Hooks (`hooks.ts`):** 
  - `@Before`: Initializes isolated browser instances.
  - `@After`: Captures full-page screenshots on scenario failures and attaches them directly to Cucumber HTML reports before tearing down contexts.
- **Clean Page Object Model (POM):** UI interactions abstracted into typed Page Objects (`LoginPage.ts`, `InventoryPage.ts`).

---

## 3. Project Structure
```text
playwright-typescript-cucumber-bdd/
├── features/
│   └── e2e.feature             # Gherkin feature files (Scenario Outline, Tags)
├── src/
│   ├── pages/                  # Page Object classes (LoginPage, InventoryPage)
│   ├── steps/                  # Step Definitions (e2e.steps.ts)
│   └── support/                # CustomWorld & Cucumber Hooks (before/after)
├── cucumber.js                 # Cucumber CLI execution configuration & reporters
├── package.json                # Dependencies and npm run scripts
├── tsconfig.json               # TypeScript compiler options
└── README.md
```

---

## 4. Execution Commands

### Install Dependencies
```bash
npm install
npx playwright install chromium
```

### Run Tests with Parallel Execution
```bash
npm run test:parallel
```

### Run Smoke Tests Only
```bash
npm run test:smoke
```

---

## 5. Reports
After test execution, open the auto-generated HTML report:
- `reports/cucumber-report.html`
