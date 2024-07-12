const path = require('path');
const dotenv = require('dotenv');
const Sequelize = require('sequelize');

// This loads our environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

// This loads and parses config.json
const config = require('./config.json');

// This initializes Sequelize with the appropriate environment config
const sequelize = new Sequelize(config[process.env.NODE_ENV || 'development']);

// This will test DB connection on application initialization
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;