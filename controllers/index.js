const router = require('express').Router();
const dashboardRoutes = require('./dashboard-page');
const homeRoutes = require('./home-controller');
const apiRoutes = require('./api');

router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;