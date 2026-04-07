describe('Formulaire utilisateur', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })

  it('remplit le formulaire correctement', () => {
    cy.get('.action-email').type('adil@test.com')
    cy.get('textarea').type('test QA',{force:true})

    cy.get('[type="checkbox"]').first().check()
     cy.get('[type="checkbox"]').first().uncheck()

    cy.get('.action-email').should('have.value', 'adil@test.com')
  })

  it('refuse email invalide (simulation)', () => {
    cy.get('.action-email').type('adil')

    cy.get('.action-email').should('have.value', 'adil')
  })

  it('champ vide', () => {
    cy.get('.action-email').clear()

    cy.get('.action-email').should('have.value', '')
  })
})