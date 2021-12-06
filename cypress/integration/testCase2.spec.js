import cypressCommands from './../support/commands'




describe('API testing', function () {


  it('visit', () => {
    cy.visit('http://localhost:5501/index.html')
  })

  var result

  // describe('API testing', () => {

  //   it('Body Length', () => {
  //     cy.request('/')
  //     .its('body')
  //     .should('have.length', 81579)
  //   })

    // it('Validate 200 status', () => {
    //   cy.request('http://localhost:5501/index.html')
    //   .its('status')
    //   .should('equal',200);
    // })

  // it('Induce response 404', () => {
  //   cy.server()
  //   cy.route({
  //     url: 'http://localhost:5501/index.html',
  //     method: 'POST',
  //     status: 404 ,
  //     response: {}
  //   })
  //   .its('status')
  //   .should('equal',404);
  // })

    // it('Header content', () => {
    //   cy.request('http://localhost:5501/index.html')
    //   .its('headers')
    //   .its('content-type')
    //   .should('include', 'text/html')
    //   .and('include', 'charset=utf-8')
    // })






//Test sending incorrect format

  // const endpoint = 'http://localhost:5501/index.html'

  // const testObject = {
  //   "title": "NewTestFromPost",
  //   "completed": false,
  //   "id": "3",
  // }

  // const addTest = testObject => {
  //   cy.request('POST', endpoint, testObject)
  // }

  // describe('gets the object inside of the object we just created and looking the body response', () => {

  //   it('Add a test', () => {

  //     addTest(testObject)
  //     cy.request('GET', `${endpoint}/${testObject.id}`)
  //       .its('body')
  //       .should('deep.eq', testObject)

  //   })

  // })




})

// })