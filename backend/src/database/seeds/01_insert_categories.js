
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, category: 'Eletrônicos'},
        {id: 2, category: 'Limpeza'},
        {id: 3, category: 'Ferramentas'}
      ]);
    });
};
