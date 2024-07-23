const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model { }

Event.init({
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  date: {  // This holds the date of the event.
    type: DataTypes.DATEONLY,  // Stores only the date.
    allowNull: false
  },
  time: {  // This holds the time of the event.
    type: DataTypes.TIME,  // Stores only the time.
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Event'
});

module.exports = Event;