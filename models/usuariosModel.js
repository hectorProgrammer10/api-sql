const Sequelize = require("sequelize");
const db = require("../config/db");

const Usuarios = db.define(
  "Usuarios",
  {
    idUsuarios: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_usuario: {
      type: Sequelize.STRING,
    },
    contraseña: {
      type: Sequelize.STRING,
    },
    nombre_completo: {
      type: Sequelize.STRING,
    },
    rol: {
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

module.exports = Usuarios;
