/// <reference types="cypress" />


it('google test', function(){
    cy.visit('https://google.com')
    //cy.get('.gLFyf').click()
    cy.get('[name="q"]').type('Automation step by step').type('{enter}')
})