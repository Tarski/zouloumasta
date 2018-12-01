describe('test register', function() {
	it('registers new user', function() {
		cy.exec('php artisan migrate:fresh')
		cy.visit('localhost:8000')
		cy.get('[href="http://localhost:8000/register"]').click()
		cy.get('#name').click().type('floune')
		cy.get('#email').click().type('floune@floune.fesse')
		cy.get('#password').click().type('password')
		cy.get('#password-confirm').click().type('password')
		cy.get('.btn').click()
	})
})