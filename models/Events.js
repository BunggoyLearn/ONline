const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

class Event extends Model {}

Event.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
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