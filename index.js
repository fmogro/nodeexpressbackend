const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Server express UP!s');
});

app.get('/new-route', (req, res) => {
  res.send('New route');
});

app.get('/products', (req, res) => {
  const { size } = req.query;
  const limit = size || 10;
  const products = [];
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      Image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parametros');
  }
});

app.get('/products/filter', (req, res) => {
  res.send('Esto es un filtro');
});
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Producto 4',
    price: 7,
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});
app.listen(port, () => {
  console.log('Port used: ' + port);
});
