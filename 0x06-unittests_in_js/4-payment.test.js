// 4-payment.test.js

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;
  let calculateStub;

  beforeEach(() => {
    // Stub the Utils.calculateNumber function to always return 10
    calculateStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on the console.log method
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the stub and spy after each test
    calculateStub.restore();
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, 20 and log the correct total', () => {
    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Check that Utils.calculateNumber was called with the correct arguments
    expect(calculateStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Check that console.log was called with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});

