
/*
  * API Routes Controller
  * 
  * ALL routes for any API should go through this
  * 
*/
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404);
  res.send("<h1>Route Not Valid!</h1><br/><br/><p>The route you are accessing is not defined and, therefore, is invalid. </p>");
});

module.exports = router;
