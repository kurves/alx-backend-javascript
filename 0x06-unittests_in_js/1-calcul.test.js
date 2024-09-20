// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when passed SUM, 1.4, and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 0 when passed SUM, 0.1, and 0.3', () => {
      assert.strictEqual(calculateNumber('SUM', 0.1, 0.3), 0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when passed SUBTRACT, 1.4, and 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 0 when passed SUBTRACT, 3.7, and 3.7', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 3.7), 0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when passed DIVIDE, 1.4, and 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when passed DIVIDE, 1.4, and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error when passed an invalid operation type', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), Error);
    });
  });
});

