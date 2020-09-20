
exports.up = function(knex) {
  return knex.schema.createTable('products', function(table) {
    table.increments('id');
    table.text('name').unique().notNullable();
    table.text('description');
    table.decimal('price').notNullable();
    table.integer('category_id').unsigned().notNullable();
    table.foreign('category_id').references('id').inTable('categories')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('products');
};
