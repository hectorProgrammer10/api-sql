const Sequelize = require("sequelize");

const sequelize = new Sequelize("farmacia", "admin", "x6J1Mw25o4TqLaHRcG7B", {
  host: "database-1-bd-relacional.cv0zstl2otkf.us-east-1.rds.amazonaws.com",
  dialect: "mysql",
});

module.exports = sequelize;
