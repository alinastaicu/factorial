import 'cypress-xpath';

import { LINK } from '../interfaces';

class FactorialCalculatorPage {
  public navigate() {
    cy.visit('http://localhost:6464/');
  }

  public get header() {
    return cy.get('h1.margin-base-vertical.text-center').as('header');
  }

  public get input() {
    return cy.get('#number.form-control').as('input');
  }

  public get calculateButton() {
    return cy.get('.btn-lg').as('calculateButton');
  }

  public link(linkName: LINK) {
    return cy.xpath(`//a[contains(.,"${linkName}")]`).as(`link:${linkName}`);
  }

  public get validationMessage() {
    return cy.get('#resultDiv').as('validationMessage');
  }

  public get resultMessage() {
    return cy.get('#resultDiv').as('resultMessage');
  }
}

export const factorialCalculatorPage = new FactorialCalculatorPage();
