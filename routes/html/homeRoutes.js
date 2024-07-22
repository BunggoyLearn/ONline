const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Event } = require('../models');
const { User } = require('../models');

router.get('/', async (req, res) => {
    try {
        const eventData = await Event.findall({
            order: [
                ['date', 'DESC'],
                sequelize.fn('max', sequelize.col('age')),
            ],
        });

        const events = eventData.map((object) => object.get({ plain: true }));

        res.render('homepage', { events });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const userData = await User.findall({
            order: [
                attributes: { exclude: ['password'] },
                order: [['name', 'DESC']],
            ],
        });

        const users = userData.map((object) => object.get({ plain: true }));

        res.render('homepage', { users });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;