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

// Router Instance
const router = require('express').Router();

// Auth
const withAuth = require('../utils/auth');

// Models
const { User } = require('../models');

// Sequelize
const sequelize = require('../config/connection');


/*
  * Main Route
  * 
*/
router.get('/', withAuth, async (req, res) => {
  // Render the profile partial 
  try {
    // console.log('DO ---------> render profile');
    // res.status(200).render('homepage', { pageTitle: 'User Profile', layout: 'profile' });
    res.redirect('/checkedout');
  }
  catch {
    res.status(500).json({ 'result': 'There was an error in rendering the Profile.' });
  }
});

/*
  * Login check & redirect
  *
*/
router.get('/login', (req, res) => {
  // If a session exists, the user IS logged in and the request can be redirected to the to the homepage

  // DO redirect to the root route to the homepage
  if (req.session.logged_in) {
    // console.log('DO ---------> user is logged in, REDIRECT to main');
    return res.redirect('/');
  }

  // If this is executed then the user IS NOT logged in and needs to be sent to the login page.
  // console.log('DO ---------> render login page');
  try {
    res.render('homepage', { pageTitle: 'Login', userData: 'USER', layout: 'login' });
  }
  catch {
    console.error('Could not Render the login page');
  }
});


/*
  * Get the Checkedout items
  * 
  * 
*/
router.get('/checkedout', async (req, res) => {
  // Get the available tools 

  const userId = req.session.user_id;
  const userRentals = await sequelize.query(
    `
    SELECT t.tool_name, tco.checkout_date, tco.return_date
    FROM tools_checked_out tco
    INNER JOIN tools t ON tco.tool_id = t.id
    WHERE tco.user_id = :userId
    `,
    {
      replacements: { userId },
      type: sequelize.QueryTypes.SELECT,
    }
  );

  console.log("Checked out");
  if (req.session.logged_in) {
    res.render('homepage', { rentals: userRentals, pageTitle: 'Profile', userData: 'USER', layout: 'profile' });
  }
});

router.get('/available', (req, res) => {
  // Get the available tools 
  if (req.session.logged_in) {
    res.render('homepage', { pageTitle: 'Tools', userData: 'USER', layout: 'toolDirectory' });
  }
});

// Export
module.exports = router;