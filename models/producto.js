"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    static associate(models) {}
  }
  Producto.init(
    {
      nombre: DataTypes.STRING,
      descripcion: DataTypes.TEXT,
      precio: DataTypes.DECIMAL,
      cantidad_stock: DataTypes.INTEGER,
      fecha_vencimiento: DataTypes.DATE,
      idProveedor: DataTypes.INTEGER,
      ubicacion: DataTypes.STRING,
      categoria: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Producto",
    }
  );
  return Producto;
};
