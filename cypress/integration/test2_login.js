describe('test login', function() {
	it('logins previously created user user', function() {
		cy.visit('localhost:8000')
		cy.get('[href="http://localhost:8000/login"]').click()
		cy.get('#email').click().type('floune@floune.fesse')
		cy.get('#password').click().type('password')
		cy.get('.btn-primary').click()
	})
})