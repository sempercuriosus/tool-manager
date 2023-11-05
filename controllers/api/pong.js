/*
 * Used for testing 
 * 
 * Sends a "PONG" response if the server is running and is rechable
 * 
*/

// Router Instance
const router = require('express').Router();

// Main Route
router.use('/', (req, res) => {
    console.log('The user has pinged!');
    res.send('Therefore, I must pong...');
});

// export
module.exports = router;
