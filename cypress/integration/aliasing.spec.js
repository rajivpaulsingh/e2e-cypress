/* eslint-disable no-undef */

describe('Text box with max characters', () => {
    it('displays the appropriate remaining characters count', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy=first-name-chars-left-count]')
            .as('charsLeftSpan');

        cy.get('[data-cy=input-first-name]')
            .as('charInput');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '15');

        cy.get('@charInput').type('hello');    
        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '10');

        cy.get('@charInput').type(' my friend');
        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '0');    
    });
});