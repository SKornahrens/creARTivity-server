
exports.up = function(knex, Promise) {
  return knex.schema.createTable("user_gallery", (table) => {
    table.integer("users_id")
      .references("users.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    table.integer("gallery_id")
      .references("gallery.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("user_gallery")
};
