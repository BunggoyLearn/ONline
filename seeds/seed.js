const sequelize = require('../config/connection');
const { User } = require('../models');
const { Event } = require('../models');

const eventData = require('./eventData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Event.bulkCreate(eventData, {
        individualHooks: true,
        returning: true,
    });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();
