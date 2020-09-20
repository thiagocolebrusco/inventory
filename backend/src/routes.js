const express = require('express');
const categoryController = require('./controllers/CategoryController');
const productController = require('./controllers/ProductController');

const routes = express.Router();

routes.get('/categories', categoryController.index);
routes.get('/categories/:id', categoryController.show);
routes.post('/categories', categoryController.create);
routes.put('/categories/:id', categoryController.update);
routes.delete('/categories/:id', categoryController.delete);

routes.get('/products', productController.index);
routes.get('/products/:id', productController.show);
routes.post('/products', productController.create);
routes.put('/products/:id', productController.update);
routes.delete('/products/:id', productController.delete);

module.exports = routes;