const router = require('express').Router();
const express = require('express');
const ejs = require('ejs');
const request = require('request');

// Routes
const ping = require('./pong');
const squareRoutes = require('./square-routes')
const userRoutes = require('./user-routes');

router.use('/ping', ping);
// router.use('/users', userRoutes);
router.use('/square', squareRoutes)

module.exports = router;
