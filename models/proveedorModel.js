const Sequelize = require("sequelize");
const db = require("../config/db");

const Proveedor = db.define(
  "Proveedor",
  {
    idProveedor: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_empresa: {
      type: Sequelize.STRING,
    },
    dirección: {
      type: Sequelize.STRING,
    },
    telefono: {
      type: Sequelize.INTEGER,
    },
    correo: {
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

db.sync()
  .then(() => {
    console.log("Modelos sincronizados con la base de datos.");
  })
  .catch((err) => {
    console.error("Error al sincronizar modelos con la base de datos:", err);
  });

module.exports = Proveedor;
