/// <reference types="cypress" />


it('assertions',function(){
    cy.visit('https://example.cypress.io/')
    cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a').click()
    cy.get('#query-btn')
        .should('contain','Button')
        .should('have.class','query-btn')
        .should('be.visible')
        .should('be.enabled')
    //.should('be.disabled')

    cy.get('#query-btn').invoke('attr','id')
        .should('equal','query-btn')

    cy.get('#query-btn')
        .should('contain','Button')
        .and('have.class','query-btn')

    // explicit assertions
    expect(true).to.be.true
    let name = "cypress"
    expect(name).to.be.equal('cypress')

    //assert
    assert.equal(4 ,4 , 'no error')
    //assert.strictEqual(4,'4','Not strictly equal')
    assert.strictEqual(4,5,'Not strictly equal')

     

})