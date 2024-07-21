const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Events } = require('../models');

router.get('/', async (req, res) => {
    try {
        const eventData = await Event.findall({
            order: [
                ['date', 'DESC'],
                sequelize.fn('max', sequelize.col('age')),
            ],
        });

        const events = userData.map((object) => object.get({ plain: true }));

        res.render('homepage', { Events });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;