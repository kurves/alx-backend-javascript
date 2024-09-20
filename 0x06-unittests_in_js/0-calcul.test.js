// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when passed 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when passed 1 and 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when passed 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when passed 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 0 when passed 0.1 and 0.3', () => {
    assert.strictEqual(calculateNumber(0.1, 0.3), 0);
  });

  it('should handle negative numbers: return -4 when passed -1.2 and -3.7', () => {
    assert.strictEqual(calculateNumber(-1.2, -3.7), -4);
  });

  it('should return the correct sum when passed very large numbers', () => {
    assert.strictEqual(calculateNumber(999999.5, 999999.6), 2000001);
  });
});

