const express = require('express');
const router = express.Router();

const productRoutes = require('./productsRoute');
const usersRoute = require('./usersRoute');
const categoriesRoutes = require('./categoriesRoutes');

function routersApi(app) {
  app.use('/api/v1', router);
  router.use('/products', productRoutes);
  router.use('/users', usersRoute);
  router.use('/categories', categoriesRoutes);
}

module.exports = routersApi;
