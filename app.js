const express = require('express');
const app = express();

// Define your routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

module.exports = app;
