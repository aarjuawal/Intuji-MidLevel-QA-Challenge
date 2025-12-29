export const apiLogin = (email, password) => {
    return cy.request({
        method: 'POST',
        url: '/api/login',
        body: { email, password},
        failonstatus: fail
    })
}