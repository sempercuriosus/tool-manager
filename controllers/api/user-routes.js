
// #region USER ROUTES OUTLINE
/*
* Overview of the user related routes
  *
  * Login - [ POST ]
  * Logout - [ POST ]
  *   This can redirect back to Login html page
  *
  * Rental - [ POST ]
  *
  * Updates - [ PUT ]
  *   First Name
  *   Last Name
  *   Address
  *   Email
  *   Password
  *
*/

// #endregion USER ROUTES OUTLINE

/*
  * Imports
*/
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



// #region Login
/*
 * Logs the user into the app
 *
*/
router.post('/login', async (req, res) => {
  /** 
    request body
    {
      "email": "",
      "password":""
    }
  */
  try {
    console.log('EMAIL EMAIL EMAIL: ' + req.body.email);

    const dbUserData = await Users.findOne({
      where: {
        email: req.body.email
      },
    });

    if (!dbUserData) {
      return res.status(404).json({ 'result': 'The username or password was not correct.' });
    }

    const validatedPassword = await dbUserData.checkPassword(req.body.password);

    if (!validatedPassword) {
      return res.status(404).json({ 'result': 'The username or password was not correct.' });
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.logged_in = true;

      return res.send('USER FOUND: ' + dbUserData.id + ' ' + dbUserData.first_name + ' ' + req.session.id);
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// #endregion Login


// #region Logout
/*
 * Logs the user out and needs a redirect to login  html
 *
*/
router.post('/logout', (req, res) => {
  try {
    if (req.session.logged_in) {
      console.log('Session', req.session.id, 'closing...');
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

// });

// #endregion Logout



// export
module.exports = router;
