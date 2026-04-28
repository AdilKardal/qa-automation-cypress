describe('Test Login', () => {

  beforeEach(() => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
  })

  it('connexion réussie', () => {
    cy.get('#username').type('student')
    cy.get('#password').type('Password123')
    cy.get('#submit').click()

    cy.contains('Logged In Successfully').should('exist')
    cy.url().should('include', 'logged-in-successfully')
  })
  
  it('mauvais mot de passe', () => {
    cy.get('#username').type('student')
    cy.get('#password').type('Password12')
    cy.get('#submit').click()

    cy.contains('Your password is invalid!').should('exist')
  })

   it('mauvais username', () => {
    cy.get('#username').type('stude')
    cy.get('#password').type('Password123')
    cy.get('#submit').click()

    cy.contains('Your username is invalid!').should('exist')
  })
  
})