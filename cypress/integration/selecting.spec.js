/// <reference types="Cypress" />
/* eslint-disable no-undef */

describe('Text box with max characters', () => {
    it('displays the appropriate remaining characters count', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy=first-name-chars-left-count]')
            .invoke('text')
            .should('equal', '15');

        cy.get('[data-cy=input-first-name]').type('hello');    
        cy.get('[data-cy=first-name-chars-left-count]')
            .invoke('text')
            .should('equal', '10');

        cy.get('[data-cy=input-first-name]').type(' my friend');
        cy.get('[data-cy=first-name-chars-left-count]')
            .invoke('text')
            .should('equal', '0');    
    });

    it('prevents the user from typing more characters once max is reached', () => {
        cy.visit('http://localhost:3000/example-2');

        cy.get('input').type('some big long characters which is more than 15 characters');
        cy.get('input')
            .should('have.attr', 'value', 'some big long c');  
    });
});