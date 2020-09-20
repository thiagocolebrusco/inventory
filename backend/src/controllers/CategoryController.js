const knex = require('../database');

module.exports = {
  async index(req, res) {
    try {
      const categories = await knex('categories');
      return res.json(categories);
    } catch (error) {
      next(error);
    }
  },

  async show(req, res, next) {
    try {
      const { id } = req.params;
      const category = await knex('categories').where({ id });
      return res.json(category);
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    const { category } = req.body;
    try {
      await knex('categories').insert({ category });
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { category } = req.body;
      await knex('categories').update({ category }).where({ id });
      return res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await knex('categories').where({ id }).del();
      return res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
}