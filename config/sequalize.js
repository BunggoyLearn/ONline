const path = require('path');
const dotenv = require('dotenv');
const Sequelize = require('sequelize');

// This loads our environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

// Loads our database configuration from config.json based on the current NODE_ENV. This will defaulting to the development enviroment.
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, 'config.json'))[env];

// This initializes Sequelize with the appropriate environment config
const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    logging: false
  }
);

// This will test our DB connection on application initialization
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;