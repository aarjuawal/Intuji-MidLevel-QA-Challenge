import user from '../../fixtures/user.json'

describe('registration Tests', () => {
  it('should create user sucessfully with valid credential', () => {
    cy.login('abcname', 'test@fake.com')
    cy.contains('Enter Account Information').should('be.visible')
    

  })
})
