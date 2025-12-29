Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://automationexercise.com/signup')

  cy.get('//input[@data-qa="login-email"]').type(email)
  cy.get('//input[@placeholder="Password"]').type(password)
  cy.get('//button[normalize-space()="Login"]').click()

})

Cypress.Commands.add('register', (name, email) => {
  cy.visit('https://automationexercise.com/signup')

  cy.get('//input[@data-qa="login-email"]').type(name)
  cy.get('//input[@placeholder="Password"]').type(email)
  cy.get('//button[normalize-space()="Login"]').click()

})
