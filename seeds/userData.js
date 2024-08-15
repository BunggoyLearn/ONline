const { User } = require('../models');

const userdata = [
    {
        "username": "FortniteGamer420",
        "email": "Jonesy@hotmail.com",
        "password": "password12345"
    },
    {
        "username": "Haloguy",
        "email": "epic@gmail.com",
        "password": "lololololol45"
    },
    {
        "username": "Swagaholic",
        "email": "swagulous@yahoo.com",
        "password": "Sw4Gyyyy"
    },
    {
        "username": "Gamers4Jesus",
        "email": "LiteralGod@yahoo.com",
        "password": "idonthaveap4ssword"
    }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;