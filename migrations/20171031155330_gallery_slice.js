
exports.up = function(knex, Promise) {
  return knex.schema.createTable("gallery_slice", (table) => {
      table.integer("gallery_id")
        .references("gallery.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
      table.integer("slice_id")
        .references("slice.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("gallery_slice")
};
