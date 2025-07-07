describe('My local app test', () => {
  it('opens the local site', () => {
    cy.visit('http://localhost:4200')
  })
})