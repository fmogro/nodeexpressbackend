const { faker } = require('@faker-js/faker');

class ProductsServices {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: index + 1,
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        Image: faker.image.imageUrl(),
      });
    }
  }
  create() {}

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find((item) => item.id == id);
  }

  update() {}

  delete() {}
}

module.exports = ProductsServices;
