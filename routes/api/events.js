const express = require('express');
const router = express.Router();
const { Event } = require('../models'); // Ensure the model path is correct

router.get('/events', async (req, res) => {
    try {
        const events = await Event.findAll();
        res.render('events', { events, loggedIn: req.session.loggedIn });
    } catch (error) {
        console.error('Failed to fetch events:', error);
        res.status(500).send('Error fetching events');
    }
});

module.exports = router;