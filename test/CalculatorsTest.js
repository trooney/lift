const should = require('should');
const Calculators = require('../src/services/Calculators')

describe('Calculators', function() {
  it('should calculate a bmi', function() {
    Calculators.calculateBMI(175, 70).should.equal(22.9)
  })
  it('should calculate a one rep max', function() {
    Calculators.calculateOneRM(10, 100).should.equal(133)
  })
  it('should calculate a vo2 max', function() {
    Calculators.calculateVo2Max(24, 176.5, 75, 'M', 7, 20).should.equal(50.26)
  })
})
