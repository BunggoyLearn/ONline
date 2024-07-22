// Package Imports
const express = require('express');
const router = express.Router();

const dashboardRoutes = require('../controllers/dashboard');
const homeRoutes = require('../controllers/home-controller');
const apiRoutes = require('./api');

// Use Controllers and Routes
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// Export
module.exports = router;