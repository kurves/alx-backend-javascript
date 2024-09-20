const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('should resolve with {data: "Successful response from the API"} when success is true', (done) => {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                expect(response).toEqual({ data: 'Successful response from the API' });
                done();
            });
    });

    it('should not resolve anything when success is false', () => {
        const result = getPaymentTokenFromAPI(false);
        expect(result).toBeUndefined();
    });
});

