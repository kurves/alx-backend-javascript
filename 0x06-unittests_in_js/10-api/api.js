const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of express
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route for the root path
app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

// Route for the cart path
app.get('/cart/:id([0-9]+)', (req, res) => {
    const cartId = req.params.id;
    res.send(`Payment methods for cart ${cartId}`);
});

// Handle invalid cart id (non-number)
app.get('/cart/:id', (req, res) => {
    res.status(404).send('Cart ID must be a number');
});

// Route for available payments
app.get('/available_payments', (req, res) => {
    const paymentMethods = {
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    };
    res.json(paymentMethods);
});

// Route for login
app.post('/login', (req, res) => {
    const { userName } = req.body;
    if (!userName) {
        return res.status(400).send('Username is required');
    }
    res.send(`Welcome ${userName}`);
});

// Listen to port 7865
const port = 7865;
app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

module.exports = app;

