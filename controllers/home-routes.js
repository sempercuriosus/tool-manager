/*
  * This handles the redirection of the Views and Layouts 
  * 
  * Main Route 
  *     The Session is Started
  *     Profile page will be rendered
  * 
  * Login Route
  *     The session is not started 
  *     The user will need to be sent to the login page
*/

const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    // Render the profile partial 
    try {
        res.status(200).render('profile', { pageTitle: 'User Profile', userData: 'USER', layout: 'homepage' });
    }
    catch {
        res.status(500).json({ 'result': 'There was an error in rendering the Profile.' });
    }
});

router.get('/login', (req, res) => {
    // If a session exists, the user IS logged in and the request can be redirected to the to the homepage
    console.log('HOME ROUTES LOGIN ---------------> is logged in.');

    // DO redirect to the root route to the homepage
    if (req.session.logged_in) {
        return res.status(204).redirect('/');
    }

    // If this is executed then the user IS NOT logged in and needs to be sent to the login page.
    res.render('profile', { pageTitle: 'User Profile', userData: 'USER', layout: 'homepage' });
});

module.exports = router;
