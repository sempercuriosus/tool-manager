
// require router
const router = require('express').Router();

// #region pong
/*
 * returns a pong message to check that this server is running and is rechable. 
 * 
*/

router.use('/', (req, res) => {
    console.log('The user has pinged!');
    res.send('Therefore, I must pong...');
});

// #endregion pong

// export
module.exports = router;
