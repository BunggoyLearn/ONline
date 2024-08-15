const sequelize = require('../config/connection');
const seedEvents = require('./eventData');
const seedUsers = require('./userData');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await seedEvents();

    await seedUsers();

    process.exit(0);
};

seedDatabase();
