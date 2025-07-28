/// <reference types = "cypress"/>

it('Google Search', () => {
    cy.visit('https://google.com')
    cy.get('#APjFqb').type('Gulani Senthuran{enter}')
    // cy.contains('Google Search').click()
})
