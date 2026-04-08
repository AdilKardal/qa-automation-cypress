describe('Formulaire contact', () => {

  beforeEach(() => {
    cy.visit('https://practice.expandtesting.com/form-validation')
  })

  it('soumet le formulaire avec des données valides', () => {
    const today = new Date().toISOString().split('T')[0];

    cy.get('#validationCustom01').clear().type('AdilK')
    cy.get('#validationCustom05').type('061-2344576')
    cy.get('input[type="date"]').type(today)
    cy.get('#validationCustom04').select('card')

    cy.get('button.btn.btn-primary').click()

    cy.get('input:invalid').should('not.exist')
  })

  it('refuse un numéro de téléphone invalide', () => {
    const today = new Date().toISOString().split('T')[0];

    cy.get('#validationCustom01').clear().type('AdilK')
    cy.get('#validationCustom05').type('abc') // invalide
    cy.get('input[type="date"]').type(today)
    cy.get('#validationCustom04').select('card')

    cy.get('button.btn.btn-primary').click()

    cy.get('input:invalid').should('exist')
  })

  it('refuse un champ obligatoire vide', () => {
    const today = new Date().toISOString().split('T')[0];

    cy.get('#validationCustom01').clear() // vide
    cy.get('#validationCustom05').type('061-2344576')
    cy.get('input[type="date"]').type(today)
    cy.get('#validationCustom04').select('card')

    cy.get('button.btn.btn-primary').click()

    cy.get('input:invalid').should('exist')
  })

})