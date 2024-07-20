const router = require('express').Router();
const userRoutes = require('./user-routes');
const eventRoutes = require('./Event-Routes');
const sendMailRoutes = require('./sendMail-routes');

router.use('/user', userRoutes);
router.use('/event', eventRoutes);
router.use('/sendMail', sendMailRoutes);

module.exports = router;