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

