/// <reference types = "cypress"/>

it ('Read files using Fixture', function() {
    cy.fixture('example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
    })
})

it('Write file demo', function() {
    cy.writeFile('sample.txt', 'Hellow I am Gulani')
    cy.writeFile('sample.txt', 'Lerning Cypress', {flag:'a+'})
})