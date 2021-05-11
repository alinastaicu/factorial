import { errorMessages } from '../fixtures/error-messages.fixture';
import { factorialCalculatorPage } from '../page-models/factorial-calculator.page';

describe('GIVEN I am on factorial calculator page ', () => {
  describe(`WHEN leave the input blank`, () => {
    before(() => {
      factorialCalculatorPage.navigate();
      factorialCalculatorPage.calculateButton.click();
    });

    after(() => {
      factorialCalculatorPage.input.clear();
    });

    it(`SHOULD not show the validation`, () => factorialCalculatorPage.validationMessage.should('not.be.visible'));
  });

  for (const message of errorMessages) {
    describe(`WHEN I enter "${message[0]}"`, () => {
      before(() => {
        factorialCalculatorPage.navigate();
        factorialCalculatorPage.input.type(message[0]);
        factorialCalculatorPage.calculateButton.click();
      });

      after(() => {
        factorialCalculatorPage.input.clear();
      });

      it(`SHOULD show the validation "${message[1]}"`, () => factorialCalculatorPage.validationMessage.should('contain.text', message[1]));
    });
  }
});
