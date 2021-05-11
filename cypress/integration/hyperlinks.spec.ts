import { LINK } from '../interfaces';

import { factorialCalculatorPage } from '../page-models/factorial-calculator.page';

describe('GIVEN I am on factorial calculator page ', () => {
  before(() => {
    factorialCalculatorPage.navigate();
  });

  describe('WHEN I click on terms and conditions link', () => {
    before(() => {
      factorialCalculatorPage.link(LINK.TermsAndConditions).click();
    });

    it('SHOULD redirect me to the terms and conditions page', () => cy.url().should('include', '/terms'));
  });

  describe('WHEN I click on privacy link', () => {
    before(() => {
      factorialCalculatorPage.navigate();
      factorialCalculatorPage.link(LINK.Privacy).click();
    });

    it('SHOULD redirect me to the privacy page', () => cy.url().should('include', '/privacy'));
  });

  describe('WHEN I click on passbase link', () => {
    before(() => {
      factorialCalculatorPage.navigate();
    });

    it('SHOULD redirect me to the passbase page', () =>
      factorialCalculatorPage.link(LINK.Passbase).should('have.attr', 'href').and('include', 'https://passbase.com'));
  });
});
