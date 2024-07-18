const router = require('express').Router();
const dashboardRoutes = require('../controllers/dashboard');
const homeRoutes = require('../controllers/home-controller');
const apiRoutes = require('../controllers/api');
const express = require('express');
const path = require('path');

router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// Package Imports

const app = express();

router.get('index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'))
});

router.get('', (req, res) => {
    res.sendFile(path.join(__dirname, '..', ''))
});


module.exports = router;