import { factorials } from '../fixtures/factorials-list.fixture';
import { factorialCalculatorPage } from '../page-models/factorial-calculator.page';

describe('GIVEN I am on factorial calculator page ', () => {
  before(() => {
    factorialCalculatorPage.navigate();
  });

  for (const factorial of factorials) {
    describe(`WHEN I enter "${factorial[0]}"`, () => {
      before(() => {
        factorialCalculatorPage.input.type(factorial[0].toString());
        factorialCalculatorPage.calculateButton.click();
      });

      after(() => {
        factorialCalculatorPage.input.clear();
      });

      it(`SHOULD show the result "${factorial[1]}"`, () =>
        factorialCalculatorPage.resultMessage.should('contain.text', `The factorial of ${factorial[0]} is: ${factorial[1]}`));
    });
  }
});
