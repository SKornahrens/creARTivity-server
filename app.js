var express = require('express');
var bodyParser = require('body-parser');

var auth = require('./routes/auth');
var users = require('./routes/users');

var app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Headers', 'Authorization');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/auth', auth);
app.use('/users', users);

module.exports = app;
