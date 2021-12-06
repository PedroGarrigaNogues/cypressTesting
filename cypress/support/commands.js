const cypressCommands = {

  clickIssuesButton(){
    cy.wait(5000)
    cy.get('i').eq(29).click({timeout:15000,force:true });
},

logsIn(){
  cy.visit('/')
  cy.get('a').contains('Sign in').click()
  cy.get('[id=email]').type('pedrogarriganogues@outlook.com')
  cy.get('[id=passwd]').type('y!2MkX@dh7crhhz')
  cy.get('span').contains('Sign in').click()
},

fillChart(){
  cy.get('a[class="sf-with-ul"]').eq(0).click();

  for(let i=0; i < 3; i++){
    if(i < 2){
      cy.get('span',{timeout:10000}).contains('Add to cart').should('not.have.css', 'display', 'none').click({force:true})
      cy.get('span').contains('Continue shopping').click()
    }else{
      cy.get('a').contains('T-shirts').click({force:true})
      cy.get('span',{timeout:10000}).contains('Add to cart').should('not.have.css', 'display', 'none').click({force:true})
      cy.get('span').contains('Continue shopping').click()
    }
  }

  cy.get('a').contains('Dresses').click({force:true})

  for(let i=0; i < 3; i++){
    if(i < 2){
      cy.get('span',{timeout:10000}).contains('Add to cart').should('not.have.css', 'display', 'none').click({force:true})
      cy.get('span').contains('Continue shopping').click()
    }else{
      cy.get('span',{timeout:10000}).contains('Add to cart').should('not.have.css', 'display', 'none').click({force:true})
      cy.get('span').contains('Proceed to checkout').click()
    }
  }


  cy.get('[id=cart_quantity_down_3_13_0_611709]').click()
},

checksOut(){
  cy.get('span').contains('Proceed to checkout').click({force:true})
  cy.get('span').contains('Proceed to checkout').click({force:true})
  cy.get('input').contains('cgv').click({force:true})
  cy.get('span').contains('Proceed to checkout').click({force:true})
  cy.get('a').contains('Pay by check.').click({force:true})
  cy.get('span').contains('I confirm my order').click({force:true})
},



  
  }
  
  module.exports = cypressCommands