describe('Gestion des éléments', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/add_remove_elements/')
  })

  it('ajoute un élément', () => {
    cy.contains('Add Element').click()

    cy.contains('Delete').should('exist')
  })

  it('supprime un élément', () => {
    cy.contains('Add Element').click()
    cy.contains('Delete').should('exist')

    cy.contains('Delete').click()
    cy.contains('Delete').should('not.exist')
  })

  it('ajoute plusieurs éléments', () => {
    cy.contains('Add Element').click()
    cy.contains('Add Element').click()
    cy.contains('Add Element').click()


    cy.get('.added-manually').should('have.length', 3)
  })
})