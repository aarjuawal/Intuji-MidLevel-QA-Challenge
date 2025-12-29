Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://automationexercise.com/signup')

  cy.get('//input[@data-qa="login-email"]').type(email)
  cy.get('//input[@placeholder="Password"]').type(password)
  cy.get('//button[normalize-space()="Login"]').click()

  cy.url().should('include', '/dashboard')
})
