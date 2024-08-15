const router = require('express').Router();
const userRoutes = require('./user-routes');
const eventRoutes = require('./Event-Routes');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);

module.exports = router;