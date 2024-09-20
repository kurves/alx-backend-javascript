// 3-payment.test.js

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber to calculate the total', () => {
    // Spy on Utils.calculateNumber
    const spy = sinon.spy(Utils, 'calculateNumber');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Check that Utils.calculateNumber was called with the correct arguments
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Restore the original function
    spy.restore();
  });
});

