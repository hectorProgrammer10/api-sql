// seeds/20231208120000-producto-seeder.js
const { queryInterface } = require("../config/db");
const Producto = require("../models/productoModel");

module.exports = {
  up: async () => {
    await queryInterface.bulkInsert("Productos", [
      {
        nombre: "Producto 1",
        descripcion: "Descripción del producto 1",
        precio: 10.99,
        cantidad_stock: 100,
        fecha_vencimiento: "2023-12-31", // Ajusta la fecha según sea necesario
        id_proveedor: 1, // ID del proveedor asociado
        ubicacion: "Estante 1",
        categoria: "Electrónica",
      },
      {
        nombre: "Producto 2",
        descripcion: "Descripción del producto 2",
        precio: 20.99,
        cantidad_stock: 50,
        fecha_vencimiento: "2023-12-31",
        id_proveedor: 2,
        ubicacion: "Estante 2",
        categoria: "Ropa",
      },
      // Agrega más datos según sea necesario
    ]);
  },

  down: async () => {
    await queryInterface.bulkDelete("Productos", null, {});
  },
};
