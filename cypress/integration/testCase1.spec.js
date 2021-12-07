
import  cypressCommands  from './../support/commands'

describe('Login, check products and checkout', () => {


  beforeEach(() => {
    cypressCommands.logsIn()
  })

  it('check history issues  ', () => {
    cypressCommands.fillChart()
    cypressCommands.checksOut()
  }) 
})
