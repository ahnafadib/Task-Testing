/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})


describe('Email Check', () => {
    it('testing', () => {
        // visiting the gmail site
        cy.visit('https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin')
    })
    //input field of the username
    it('The webpage loads', () => {
        cy.get('input[name="identifier"]').click({ force: true }).type('u1604040@student.cuet.ac.bd')

        //submit after giving user name
        cy.get('#identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click()

        //waiting for 3 sec
        cy.wait(3000)

        //input field of the password
        cy.get('input[name="password"]').click({ force: true }).type('password')

        //next to password
        cy.get('#passwordNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click()

    })
})
