export const getHeading = () => cy.get('h1');
export const getForm = () => cy.get('div[title=Form]');
export const getTable = () => cy.get('div[title=Table]');
export const getEurRow = () => getTable().contains('EUR').parent();
