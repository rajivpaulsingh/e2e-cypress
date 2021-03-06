/* eslint-disable no-undef */

describe('Basic page interactions', () => {

    beforeEach(() => {
        cy.visit('example-4');
    });

    it('sets the header text to the item\'s name when double clicked', () => {
        cy.get('[data-cy=box-1-items-list] > :nth-child(2)')
            .dblclick();

        cy.get('[data-cy=box-1-selected-name]')
            .invoke('text')
            .should('equal', 'Option Two');    
    });

    it('displays the correct count for the number of selected checkboxes', () => {
        cy.get('[data-cy=box-2-checkboxes] > :nth-child(1) input')
            .check();

        cy.get('[data-cy=box-2-selected-count]')
            .invoke('text')
            .should('equal', '1');
    });

    it('displays the name of the currently selected drop down items', () => {
        cy.get('[data-cy=box-3-dropdown]')
            .select('Option Three');

        cy.get('[data-cy=box-3-selected-name]')
            .invoke('text')
            .should('equal', 'Option Three');
    });

    it('should display the name of the recent hovered item', () => {
        cy.get('[data-cy=box-4-items-list] > :nth-child(2)')
            .trigger('mouseover')
            // .then(() => {
            //     debugger;
            // });
            .debug(); //open inspect element in the browser and then run the test
        cy.get('[data-cy=box-4-selected-name]')
            .invoke('text')
            .should('equal', 'Option Two')
    })
});