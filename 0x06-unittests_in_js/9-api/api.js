const express = require('express');

// Create an instance of express
const app = express();

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

// Listen to port 7865
const port = 7865;
app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

module.exports = app;

