var knex = require('./connection')

module.exports = {
  getUsers: function() {
    return knex('users').select()
  },
  getUserById: function(id) {
    return knex('users').select().where('id', id)
  },
  getSecretsByUserId: function(id) {
    return knex('secrets')
      .select('id', 'secret')
      .where('user_id', id)
  }
}
