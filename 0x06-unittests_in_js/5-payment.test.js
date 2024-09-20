const sendPaymentRequestToAPI = require('./5-payment');
const sinon = require('sinon');

describe('sendPaymentRequestToAPI', function () {
    let consoleSpy;

    // Hook to set up the spy before each test
    beforeEach(function () {
        consoleSpy = sinon.spy(console, 'log');
    });

    // Hook to clean up the spy after each test
    afterEach(function () {
        consoleSpy.restore();
    });

    it('should log "The total is: 120" when called with 100 and 20', function () {
        sendPaymentRequestToAPI(100, 20);
        expect(consoleSpy.calledOnce).toBe(true);
        expect(consoleSpy.calledWith('The total is: 120')).toBe(true);
    });

    it('should log "The total is: 20" when called with 10 and 10', function () {
        sendPaymentRequestToAPI(10, 10);
        expect(consoleSpy.calledOnce).toBe(true);
        expect(consoleSpy.calledWith('The total is: 20')).toBe(true);
    });
});

