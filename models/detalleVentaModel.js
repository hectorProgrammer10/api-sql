const Sequelize = require("sequelize");
const db = require("../config/db");

const DetalleVenta = db.define(
  "DetalleVenta",
  {
    idDetalleVenta: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idVenta: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    idProducto: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    cantidad: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    precioUnitario: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    subtotal: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: "detalle_venta",
  }
);

module.exports = DetalleVenta;
