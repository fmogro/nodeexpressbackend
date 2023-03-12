const productRoutes = require('./productsRoute');
const usersRoute = require('./usersRoute');
const categoriesRoutes = require('./categoriesRoutes');
function routersApi(app) {
  app.use('/products', productRoutes);
  app.use('/users', usersRoute);
  app.use('/categories', categoriesRoutes);
}

module.exports = routersApi;
