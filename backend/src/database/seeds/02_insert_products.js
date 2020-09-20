
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          id: 1,
          name: 'Computador',
          description: 'um bom computador.',
          price: 2000.0,
          category_id: 1
        },
        {
          id: 2,
          name: 'Álcool',
          description: 'Álcool em gel.',
          price: 10.0,
          category_id: 2
        },
        {
          id: 3,
          name: 'Furadeira',
          description: 'Acompanhas as agulhas ',
          price: 10.0,
          category_id: 3
        },
      ]);
    });
};
