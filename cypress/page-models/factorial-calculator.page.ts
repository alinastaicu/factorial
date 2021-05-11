import 'cypress-xpath';

import { LINK } from '../interfaces';

class FactorialCalculatorPage {
  public navigate() {
    cy.visit('http://localhost:6464/');
  }

  public get header() {
    return cy.get('h1.margin-base-vertical.text-center');
  }

  public get input() {
    return cy.get('#number.form-control');
  }

  public get calculateButton() {
    return cy.get('.btn-lg');
  }

  public link(linkName: LINK) {
    return cy.xpath(`//a[contains(.,"${linkName}")]`);
  }

  public get validationMessage() {
    return cy.get('#resultDiv');
  }

  public get resultMessage() {
    return cy.get('#resultDiv');
  }
}

export const factorialCalculatorPage = new FactorialCalculatorPage();
