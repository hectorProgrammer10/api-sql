const Sequelize = require("sequelize");
const db = require("../config/db");

const RegistroInventario = db.define(
  "RegistroInventario",
  {
    idRegistro: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha_registro: {
      type: Sequelize.DATE,
    },
    tipo_operación: {
      type: Sequelize.STRING,
    },
    cantidad_modificada: {
      type: Sequelize.INTEGER,
    },
    idProducto: {
      type: Sequelize.INTEGER,
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

db.sync()
  .then(() => {
    console.log("Modelos sincronizados con la base de datos.");
  })
  .catch((err) => {
    console.error("Error al sincronizar modelos con la base de datos:", err);
  });

module.exports = RegistroInventario;
