const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("online_db", "your_username", "your_password", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
