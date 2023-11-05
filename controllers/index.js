
/*
  * API Routes Controller
  * 
  * ALL routes for any API should go through this
  * 
*/
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404);
  res.send("<h1>Page Not Valid!</h1><br/><br/><p>The Page you are attempting to access is not there. </p>");
});

module.exports = router;
