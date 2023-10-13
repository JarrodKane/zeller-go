/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    // We visit our local dev, need to have this running
    cy.visit('http://localhost:5173/');
  });

  it('displays a selection of two user types with Admin selected by default', () => {
    cy.get('div[data-testid="select-roles"]').should('contain', 'Admin');
    cy.get('div[data-testid="select-roles"]').should('contain', 'Manager');

    cy.get('label[data-testid="radio-0"]').should('have.text', 'Admin');
  });

  it('selecting Manager', () => {
    cy.get('label[data-testid="radio-1"]').click();

    cy.get('section[data-testid="section-user"]')
      .children()
      .should('have.length', 3);
  });

  it('selecting Admin', () => {
    cy.get('label[data-testid="radio-0"]').click();

    cy.get('section[data-testid="section-user"]')
      .children()
      .should('have.length', 4);
  });

  it('selecting Manager', () => {
    cy.get('label[data-testid="radio-1"]').click();

    cy.get('section[data-testid="section-user"]')
      .children()
      .should('have.length', 3);
  });

  it('selecting Admin', () => {
    cy.get('label[data-testid="radio-0"]').click();

    cy.get('section[data-testid="section-user"]')
      .children()
      .should('have.length', 4);

    cy.get('section[data-testid="section-user"]')
      .contains('Manager')
      .should('not.exist');
  });
});
