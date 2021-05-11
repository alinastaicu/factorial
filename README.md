# Factorial E2E tests

**Framework used:** Cypress with Typescript

**Documentation Cypress**: [https://docs.cypress.io/guides/overview/why-cypress](https://docs.cypress.io/guides/overview/why-cypress)

> Some tests are intentionally left to fail because the original implementation seemed wrong:

Tests that are failing intentionally:

```bash
GIVEN I am on factorial calculator page
    WHEN I click on terms and conditions link
      ❌ SHOULD redirect me to the terms and conditions page
    WHEN I click on privacy link
      ❌ SHOULD redirect me to the privacy page
    WHEN I click on passbase link
      ✅ SHOULD redirect me to the passbase page (74ms)
```

How to run locally

```bash
yarn install
yarn cypress:open
```

How would you run it in CI:

```bash
yarn cypress:ci
```

Test results

- will automatically create 2 folder video and screenshot for the failing tests
- will be overwritten when you run again the test
- change the settings on cypress,json if you don't want the video
- additionally use Cypress dashboard for more advanced features

### How to explore the project:

**Fixture folder :**

- all fixture files should go here

**Integration folder:**

- all test files

**Page models folder:**

- all elements for a page are found here
- used classes and getters to better encapsulate cypress elements
