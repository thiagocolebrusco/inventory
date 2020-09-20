
exports.up = function(knex) {
  return knex.schema.createTable('categories', function(table) {
    table.increments('id');
    table.text('category').unique().notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('categories');
};
