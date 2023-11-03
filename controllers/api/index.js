const router = require('express').Router();

// Routes
const ping = require('./pong');
const userRoutes = require('./user-routes');

// pong for testing 
router.use('/ping', ping);
// user routes
router.use('/users', userRoutes);

module.exports = router;
