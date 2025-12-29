require('cypress-xpath');
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/')
  cy.get('a[href="/login"]').click()
  cy.xpath('//input[@data-qa="login-email"]').type(email)
  cy.xpath('//input[@data-qa="login-password"]').type(password)
  cy.xpath('//button[normalize-space()="Login"]').click()

})

Cypress.Commands.add('register', (name, email) => {
  cy.visit('/')
  cy.get('a[href="/login"]').click()

  cy.xpath('//input[@placeholder="Name"]').type(name)
  cy.xpath('//input[@data-qa="signup-email"]').type(email)
  cy.xpath('//button[normalize-space()="Signup"]').click()

})
