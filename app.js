// Dependencies
const express = require('express');
const morgan = require('morgan');
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('success!');
});

module.exports = app;
