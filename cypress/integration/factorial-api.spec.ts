import { factorials } from '../fixtures/factorials-list.fixture';

describe('GIVEN I test api calls', () => {
  let response: Cypress.Response;

  for (const factorial of factorials) {
    describe(`WHEN calling the API with ${factorial[0]}`, () => {
      before(async () => {
        response = await cy
          .request({
            method: 'POST',
            url: 'http://localhost:6464/api/v1/factorial',
            form: true,
            body: {
              number: factorial[0],
            },
          })
          .promisify();
      });

      it('SHOULD return status 200', () => expect(response.status).to.eq(200));
      it(`SHOULD return ${factorial[1]}`, () =>
        expect(response.body).to.deep.eq({
          answer: factorial[1] === Infinity ? null : factorial[1],
        }));
    });
  }
});
