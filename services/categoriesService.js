const { faker } = require('@faker-js/faker');

class CategoriesServices {
  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id: index + 1,
        name: faker.commerce.productName(),
      });
    }
  }
  create() {}

  find() {
    return this.categories;
  }

  findOne(id) {
    return this.categories.find((item) => item.id == id);
  }

  update() {}

  delete() {}
}

module.exports = CategoriesServices;
