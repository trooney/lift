const should = require('should')

const Validators = require('../src/services/Validators')

describe('Validators', function() {
  it('.isNumber', function() {
    const data = [
      { it: 1, is: true },
      { it: 1.0, is: true },
      { it: '1', is: true },
      { it: '1.0', is: true },
      { it: 'a', is: false },
      { it: 'a1', is: false },
      { it: 'a1.0', is: false },
    ]

    data.forEach( test => {
      Validators.isNumber(test.it).should.equal(test.is)
    })

  })

  it('.toNumber', function() {
    const data = [
      { it: 1, is: 1 },
      { it: 1.0, is: 1.0 },
      { it: '1', is: 1 },
      { it: '1.0', is: 1.0 },
      { it: 'a', is: 0 },
      { it: 'a1', is: 0 },
      { it: 'a1.0', is: 0 },
    ]

    data.forEach( test => {
      Validators.toNumber(test.it).should.equal(test.is)
    })

  })
  // it('should calculate a one rep max', function() {
  //   Calculators.calculateOneRM(10, 100).should.equal(133)
  // })
  // it('should calculate a vo2 max', function() {
  //   Calculators.calculateVo2Max(24, 176.5, 75, 'M', 7, 20).should.equal(50.26)
  // })
})
