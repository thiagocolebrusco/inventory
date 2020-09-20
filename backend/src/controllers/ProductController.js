const knex = require('../database');

module.exports = {

  async index(req, res, next) {
    const { category_id } = req.query;
    try {
      const query = knex('products');

      if (category_id) {
        query.where({ category_id });
      }

      const products = await query.join('categories', 'categories.id', '=', 'products.category_id')
        .select('products.*', 'categories.category');

      return res.json(products);
    } catch (error) {
      next(error);
    }
  },

  async show(req, res, next) {
    try {
      const { id } = req.params;
      const product = await  knex('products').innerJoin('categories', 'categories.id', '=', 'products.category_id').select('products.*', 'categories.category').where('products.id', id)
      return res.json(product);
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    const { name, description, price, category_id } = req.body;
    try {
      await knex('products').insert({ name, description, price, category_id });
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { name, description, price, category_id } = req.body;
      await knex('products').update({ name, description, price, category_id }).where({ id });
      return res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await knex('products').where({ id }).del();
      return res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
}