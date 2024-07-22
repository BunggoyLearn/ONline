const router = require('express').Router();
const userRoutes = require('./user-routes');
const eventRoutes = require('../../routes/api/Event-Routes');
const sendMailRoutes = require('./sendMail-routes');

router.use('/user', userRoutes);
router.use('/events', eventRoutes);
router.use('/sendMail', sendMailRoutes);

module.exports = router;