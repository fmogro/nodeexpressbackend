const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
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

router.get('/filter', (req, res) => {
  res.send('Esto es un filtro');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Producto 4',
    price: 7,
  });
});

module.exports = router;
