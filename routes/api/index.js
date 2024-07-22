const express = require('express');
const router = express.Router();
const eventsRoutes = require('./Event-Routes');

router.use('/events', eventsRoutes);

module.exports = router;