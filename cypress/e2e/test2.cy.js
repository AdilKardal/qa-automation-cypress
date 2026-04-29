describe('Test login', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login')
    })

     it('connexion réussie', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()

    cy.contains('Secure Area').should('exist')
    cy.url().should('include', '/secure')
     })

     it('connexion echouée', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword')
    cy.get('button[type="submit"]').click()

    cy.contains('Your password is invalid!').should('exist')
     })
})