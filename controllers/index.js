
/*
  * API Routes Controller
  * 
  * ALL routes for any API should go through this
  * 
*/
const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
