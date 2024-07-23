const router = require('express').Router();
const userRoutes = require('../../routes/api/user-routes');
const eventRoutes = require('../../routes/api/Event-Routes');
const sendMailRoutes = require('./sendMail-routes');

router.use('/user', userRoutes);
router.use('/events', eventRoutes);
router.use('/sendMail', sendMailRoutes);

module.exports = router;