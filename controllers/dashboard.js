const router = require('express').Router();
const { User, Events } = require('../models');

router.get('/', async (req, res) => { 
  try {
    if (!req.session.user_id) {
      res.render('dashboard', { message: 'Please log in to view the dashboard' });
      return;
    }

    const userData = await User.findByPk(req.session.user_id);
    const user = userData.get({ plain: true });

    res.render('dashboard', {
      user,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
