
describe('API testing', function () {

  beforeEach(() => {
    cy.visit('http://localhost:5500/index.html')
  })

  describe('API testing', () => {

    it('Checks the body Length', () => {
      cy.request('http://localhost:5500/index.html')
        .its('body')
        .should('have.length', 2087)
    })

    it('Validate 200 status', () => {
      cy.request('http://localhost:5500/index.html')
        .its('status')
        .should('equal', 200);
    })

    it('Header content', () => {
      cy.request('http://localhost:5500/index.html')
        .its('headers')
        .its('content-type')
        .should('include', 'text/html')
        .and('include', 'charset=UTF-8')

    })
  })
})
