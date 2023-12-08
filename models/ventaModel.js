const Sequelize = require("sequelize");
const db = require("../config/db");

const Venta = db.define(
  "Venta",
  {
    idVenta: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha_venta: {
      type: Sequelize.DATE,
    },
    total: {
      type: Sequelize.DECIMAL,
    },
    método_pago: {
      type: Sequelize.STRING,
    },
    idUsuarios: {
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

module.exports = Venta;
