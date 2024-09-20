const request = require('request');
const { expect } = require('chai');

// Start the server
const app = require('./api');
const baseUrl = 'http://localhost:7865';

describe('Index page', () => {
    it('should return status code 200', (done) => {
        request.get(baseUrl, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it('should return the correct message', (done) => {
        request.get(baseUrl, (err, res, body) => {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});

describe('Cart page', () => {
    it('should return status code 200 for valid cart ID', (done) => {
        request.get(`${baseUrl}/cart/12`, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 12');
            done();
        });
    });

    it('should return status code 404 for invalid cart ID', (done) => {
        request.get(`${baseUrl}/cart/hello`, (err, res, body) => {
            expect(res.statusCode).to.equal(404);
            expect(body).to.equal('Cart ID must be a number');
            done();
        });
    });
});

describe('Available payments page', () => {
    it('should return the correct payment methods object', (done) => {
        request.get(`${baseUrl}/available_payments`, (err, res, body) => {
            const expectedResponse = {
                payment_methods: {
                    credit_cards: true,
                    paypal: false
                }
            };
            expect(res.statusCode).to.equal(200);
            expect(JSON.parse(body)).to.deep.equal(expectedResponse);
            done();
        });
    });
});

describe('Login page', () => {
    it('should return a welcome message for a valid userName', (done) => {
        const data = { userName: 'Betty' };
        request.post({
            url: `${baseUrl}/login`,
            json: data
        }, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('Welcome Betty');
            done();
        });
    });

    it('should return 400 if no userName is provided', (done) => {
        request.post({
            url: `${baseUrl}/login`,
            json: {}
        }, (err, res, body) => {
            expect(res.statusCode).to.equal(400);
            expect(body).to.equal('Username is required');
            done();
        });
    });
});

