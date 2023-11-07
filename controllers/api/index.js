/*
  * API Routes Controller
  * 
  * Contains the API route definition
*/
// Express Router Instance
const router = require('express').Router();
// Import for Routes
const express = require('express');
const ejs = require('ejs');
const request = require('request');
const url = 'https://connect.squareup.com/v2/payments';

// Routes
const ping = require('./pong');
const userRoutes = require('./user-routes');
const toolRoutes = require('./tool-routes');

// pong (for testing the server is up)
router.use('/ping', ping);
// user routes
router.use('/users', userRoutes);
// tool routes
router.use('/tools', toolRoutes);

module.exports = router;
