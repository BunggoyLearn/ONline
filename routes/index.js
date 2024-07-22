// Package Imports
const express = require('express');
const router = express.Router();

const dashboardRoutes = require('../controllers/dashboard');
const homeRoutes = require('../controllers/home-controller');
const apiRoutes = require('../controllers/api');
const eventsRoutes = require('../controllers/events');

// Use Controllers and Routes
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/events', eventsRoutes);

// Export
module.exports = router;