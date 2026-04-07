describe('Formulaire utilisateur', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })

  it('remplit correctement', () => {
    cy.get('.action-email').type('adil@test.com')
   
    cy.get('textarea').should('be.disabled')

    cy.get('[type="checkbox"]').first().check()

    cy.get('.action-email').should('have.value', 'adil@test.com')
  })

  it('email invalide', () => {
    cy.get('.action-email').clear().type('adil')

    cy.get('.action-email').should('have.value', 'adil')
  })

  it('champ vide', () => {
    cy.get('.action-email').clear()

    cy.get('.action-email').should('have.value', '')
  })

})