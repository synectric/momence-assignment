import { getEurRow, getForm, getHeading, getTable } from '../support/app.po';

describe('Currency rates app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display all elements', () => {
    getHeading().should('include.text', 'Daily exchange rates');

    getForm()
      .should('include.text', 'Enter the amount to convert:')
      .and('contain.html', 'input')
      .and('include.text', 'CZK');

    getTable().should('contain.text', 'countrycurrencyamountcoderateconverted');
    getTable().children().should('have.length.at.least', 2);
  });

  it('should update rates when changing input', () => {
    getEurRow()
      .children(':nth-child(5)')
      .then((cell) => {
        const text = cell.text();
        cy.wrap(text).as('rate');
      });

    cy.get('@rate').then((rate) => {
      getEurRow()
        .children(':nth-child(6)')
        .should('have.text', (1 / Number(rate)).toLocaleString(undefined, { maximumFractionDigits: 2 }));
      getForm().children('input').type('000');
      getForm().children('input').should('have.value', '1,000');
      getEurRow()
        .children(':nth-child(6)')
        .should('have.text', (1000 / Number(rate)).toLocaleString(undefined, { maximumFractionDigits: 2 }));
    });
  });
});
