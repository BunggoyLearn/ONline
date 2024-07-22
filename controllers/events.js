const router = require('express').Router();

// Route to render the events form
router.get('/events', (req, res) => {
  if (req.session.loggedIn) {
    res.render('events', { loggedIn: req.session.loggedIn });
  } else {
    res.redirect('/login');
  }
});


module.exports = router;
