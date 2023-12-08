const Sequelize = require("sequelize");
const db = require("../config/db");

const Producto = db.define(
  "Producto",
  {
    idProducto: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: Sequelize.STRING,
    },
    descripcion: {
      type: Sequelize.TEXT,
    },
    precio: {
      type: Sequelize.DECIMAL,
    },
    cantidad_stock: {
      type: Sequelize.INTEGER,
    },
    fecha_vencimiento: {
      type: Sequelize.DATE,
    },
    idProveedor: {
      type: Sequelize.INTEGER,
    },
    ubicacion: {
      type: Sequelize.STRING,
    },
    categoria: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    deleted: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  },
  {
    timestamps: false,
    underscored: true,
    paranoid: true, // Habilitar eliminación lógica
  }
);

module.exports = Producto;
