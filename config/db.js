const Sequelize = require("sequelize");

const sequelize = new Sequelize("farmacia", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
