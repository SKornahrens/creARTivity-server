
exports.up = function(knex, Promise) {
  return knex.schema.createTable("slice", (table) => {
    table.increments()
    table.text("imageURL")
    table.integer("height")
    table.integer("width")
    table.boolean("selected")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('slice');
};
