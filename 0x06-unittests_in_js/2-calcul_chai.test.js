// 2-calcul_chai.test.js

const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when passed SUM, 1.4, and 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 0 when passed SUM, 0.1, and 0.3', () => {
      expect(calculateNumber('SUM', 0.1, 0.3)).to.equal(0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when passed SUBTRACT, 1.4, and 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 0 when passed SUBTRACT, 3.7, and 3.7', () => {
      expect(calculateNumber('SUBTRACT', 3.7, 3.7)).to.equal(0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when passed DIVIDE, 1.4, and 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when passed DIVIDE, 1.4, and 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error when passed an invalid operation type', () => {
      expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw('Invalid operation type');
    });
  });
});

