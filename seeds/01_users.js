const bcrypt = require('bcrypt')

exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM users; ALTER SEQUENCE users_id_seq RESTART WITH 3;')
    .then(function () {
      return knex('users').insert([
        {id: 1, email: 'roberto.ortega@galvanize.com', username: 'berto', password: bcrypt.hashSync('iago', 12)},
        {id: 2, email: 'matt.winzer@galvanize.com', username: 'winzer', password: bcrypt.hashSync('yogi', 12)},
      ])
    });
};
