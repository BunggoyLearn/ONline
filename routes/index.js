<<<<<<< HEAD
const router = require('express').Router();
const dashboardRoutes = require('../controllers/dashboard');
const homeRoutes = require('../controllers/home-controller');
const apiRoutes = require('../controllers/api');

router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
=======
// Package Imports
const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();


router.get('index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'))
});

router.get('', (req, res) => {
    res.sendFile(path.join(__dirname, '..', ''))
});

>>>>>>> ef705c5d96489f9730021d1939d662902c448ada

module.exports = router;