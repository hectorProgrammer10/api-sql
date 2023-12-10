"use strict";

const faker = require("faker");

module.exports = {
  async up(queryInterface, Sequelize) {
    const productos = [];

    // Generar datos ficticios para productos
    for (let i = 0; i < 10; i++) {
      productos.push({
        nombre: faker.commerce.productName(),
        descripcion: faker.lorem.sentence(),
        precio: faker.random.number({ min: 1, max: 1000, precision: 0.01 }),
        cantidad_stock: faker.random.number({ min: 1, max: 100 }),
        fecha_vencimiento: faker.date.future(),
        idProveedor: 1,
        ubicacion: faker.address.city(),
        categoria: faker.random.word(),
        createdAt: new Date(),
        updatedAt: new Date(),
        deleted: 0,
      });
    }

    await queryInterface.bulkInsert("Productos", productos, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Productos", null, {});
  },
};
