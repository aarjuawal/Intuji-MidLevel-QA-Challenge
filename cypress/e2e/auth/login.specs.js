import user from '../../fixtures/user.json'
// import LoginPage from '../../pages/LoginPage'
// const loginPage = new LoginPage()

describe('Login Tests', () => {
  it('should login successfully with valid credential', () => {

    cy.login(user.email, user.password)
    cy.contains('Logout').should('be.visible')

  })
  it('should display an error for invalid email and password', () => {

    cy.login('wrong@gmail.com', 'passq12')
    cy.contains('Your email or password is incorrect!')

  })
    it('should display an error for sending empty field', () => {
    cy.login('', '')
    cy.contains('Your email or password is incorrect!')

  })
})
