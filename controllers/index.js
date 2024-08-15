const router = require('express').Router();
const dashboardRoutes = require('./dashboard');
const homeRoutes = require('./home-controller');
const apiRoutes = require('./api');
const eventsRoutes = require('./events')

router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/events', eventsRoutes);
/*
router.get('/events', async (req, res) => {
  try {
    const eventData = await Event.findAll();
    const events = eventData.map(event => event.get({ plain: true }));

    res.render('events', { events, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
*/
module.exports = router;
