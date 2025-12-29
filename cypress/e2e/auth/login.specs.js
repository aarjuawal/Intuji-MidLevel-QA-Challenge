import user from '../../fixtures/user.json'


describe('Login Tests', () => {
  it('should login successfully with valid credential', () => {
    cy.login('user.email', 'user.password')
    cy.contains('Logout').should('be.visible')

  })
  it('should login successfully with valid credential', () => {
    cy.login('wrong@gmail.com', 'passq12')
    cy.contains('Your email or password is incorrect!')

  })
})
