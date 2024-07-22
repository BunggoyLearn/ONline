const express = require('express');
const router = express.Router();
const { Event } = require('../models');

// This route should display events
router.get('/', async (req, res) => {
    try {
        const eventsData = await Event.findAll();
        const events = eventsData.map(event => event.get({ plain: true }));
        res.render('events', { events, loggedIn: req.session.loggedIn });
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).send('Error fetching events');
    }
});

module.exports = router;