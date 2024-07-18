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


module.exports = router;