const express = require('express');
const { User, Event, sendMail } = require('../models');
const router = express.Router();



router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login', { loggedIn: false });
});


module.exports = router;