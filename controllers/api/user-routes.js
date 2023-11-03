
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

console.log('alskdjfjasdkfa', __dirname);

console.log(Users);

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
      email: "", 
      password: ""
    }
  */
  try {
    console.log('email: ' + req.body.email, 'password: ' + req.body.password);
    // res.send();

    const dbUserData = await Users.findOne({
      where: {
        email: req.body.email
      },
    });

    console.log(dbUserData);

    res.end();

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
// router.post('/logout', async (req, res) => {


// });

// #endregion Logout


// #region Updates
/*
 * User information updates
 *  Takes in a JSON body containing the entire user object
 *  using the ID
 *  SANITIZES THE INPUT - ensuring it is a string value
 *  only then will the update happen
*/

// router.put('/:id', async (req, res) => {
//   const userId = req.params.id;

// });

// #endregion Updates

// export
module.exports = router;
