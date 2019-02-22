const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('aaaaaaaaaaaaaaaHello World');
});

module.exports = app;
