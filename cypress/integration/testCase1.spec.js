
import  cypressCommands  from './../support/commands'

describe('Login, check products and checkout', () => {


  it('check history issues  ', () => {
    
    cypressCommands.logsIn()
    cypressCommands.fillChart()
    cypressCommands.checksOut()
       
  }) 
})