const express = require('express');

// Create an instance of express
const app = express();

// Route for the root path
app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

// Listen to port 7865
const port = 7865;
app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

module.exports = app;

