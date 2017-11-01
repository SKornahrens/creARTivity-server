var express = require('express');
var bodyParser = require('body-parser');

var auth = require('./routes/auth');
var users = require('./routes/users');
var gallery = require('./routes/gallery');
var slice_art = require('./routes/slice_art');

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
app.use('/gallery', gallery);
app.use('/slice_art', slice_art);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err.message);
  console.error(err);
});


module.exports = app;
