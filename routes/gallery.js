var express = require('express');
var router = express.Router();

var knex = require('../db/connection');
var jwt = require('jsonwebtoken');

router.post('/gallery', function(req, res, next) {
  const user = getUser(req.body.token)
  res.send(user)
}

function getUser(token) {
  try {
    var decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    return decoded;
  } catch (err) {
    console.log(err);
  }
}
