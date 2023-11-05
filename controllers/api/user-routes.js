/*
  * User Routes
  * 
  * Actions for the User 
  * 
*/

// Imports
const router = require('express').Router();
const { Users } = require('../../models');

// works - because we are accessing the route directly, and the object is destructured when it is exported.
// or at least, when we are accessing it this way the model is being exported as an object available to use.
// const Users = require('../../models/users.js');
// does not work - because we are accessing the file directly, and nesting the object inside of an object when we use this syntax {{Users}} is esentially what we are accessing. 
// const { Users } = require('/Users/keys/projects/bootcamp/project2/models/users.js');
// const { Users } = require('../../models/users.js');

router.use('/ping', (req, res) => {
  console.log('The user has user-pinged!');
  res.send('Therefore, I must user-pong...');
});

/*
 * Logs the user into the app
 *
*/
router.post('/login', async (req, res) => {

  // #region REQUEST BODY
  /*
    * request body
  
      {
        "email": "",
        "password":""
      }
  
    */
  // #endregion REQUEST BODY

  try {
    // See if the user exists
    const dbUserData = await Users.findOne({
      where: {
        email: req.body.email
      },
    });

    // Error if the user is not found
    if (!dbUserData) {
      return res.status(404).json({ 'result': 'The username or password was not correct.' });
    }

    const validatedPassword = await dbUserData.checkPassword(req.body.password);

    // Error if the password is not right
    if (!validatedPassword) {
      return res.status(404).json({ 'result': 'The username or password was not correct.' });
    }

    // The user was found and can log the session in the DB.
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.logged_in = true;

      return res.status(200).json({ 'response': 'User was logged in' });
    });

  } catch (err) {
    res.status(500).json({ 'response': 'There was an issue looking up the user.' });
  }
});


/*
 * Logs the user out and needs a redirect to login html
 *
 * Remove the token and end the session
*/
router.post('/logout', (req, res) => {
  try {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  }
  catch (error) {
    res.status(500).json({ 'response': 'There was an error in logging out.' });
  }
});


// export
module.exports = router;