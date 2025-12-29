describe('Login Tests', () => {
  it('should login successfully with valid credential (using cy.fixture)', () => {
    cy.fixture('user.json').then((userData) => {
      cy.register(userData.name, userData.email)
      cy.contains('Enter Account Information').should('be.visible')
      cy.get('input[@id="name"]').type('abc')
      cy.get('#email').type('abc@hah.sd')
      cy.get('input[@id="password"]').type('xyd')
      cy.get('input[@id="first_name"]').type('abc')
      cy.get('input[@id="last_name"]').type('abhsj')
      cy.get('input[@id="address1"]').type('eexyd')
    })
  })
})
