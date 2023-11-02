const router = require('express').Router();

// Routes
const ping = require('./pong');
const userRoutes = require('./user-routes');

router.use('/ping', ping);
// router.use('/users', userRoutes);

module.exports = router;
