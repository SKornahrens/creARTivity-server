
exports.up = function(knex, Promise) {
  return knex.schema.createTable('gallery', function(table){
    table.increments();
    table.text('imageURL')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('gallery');
};
