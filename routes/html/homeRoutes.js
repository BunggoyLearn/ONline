const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Event } = require('../models');
const { User } = require('../models');

router.get('/', async (req, res) => {
    try {
        const eventData = await Event.findAll({
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
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'DESC']],
    });

    res.status(200).json(userData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


router.get('/events', (req, res) => {
  res.render('events', {
    loggedIn: req.session.loggedIn
  });
});

module.exports = router;