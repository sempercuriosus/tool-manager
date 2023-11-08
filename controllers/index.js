/*
  * Routes Controller
  * 
  * ALL routes should go through this file!
  * 
*/
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const toolRoutes = require('./api/tool-routes');

// Defined Routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/api', toolRoutes);

// Handle invalid routes
router.use((req, res) => {
  res.status(404).send("<h1>Page Not Valid!</h1><br/><br/><p>The Page you are attempting to access is not there. </p>");
});

module.exports = router;
