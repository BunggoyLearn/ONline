const router = require('express').Router();
const dashboardRoutes = require('../controllers/dashboard');
const homeRoutes = require('../controllers/home-controller');
const apiRoutes = require('../controllers/api');

router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;