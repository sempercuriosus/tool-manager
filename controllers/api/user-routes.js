
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
const { Users } = require('../../models/users');





// #region Main Route From API
/*
 * Main user page coming from the API route controller
 *
*/


// #endregion Main Route From API



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

});

// #endregion Login


// #region Logout
/*
 * Logs the user out and needs a redirect to login  html
 *
*/
router.post('/', async (req, res) => {


});

// #endregion Logout


// #region Updates
/*
 * User information updates
 *  Takes in a JSON body containing the entire user object
 *  using the ID
 *  SANITIZES THE INPUT - ensuring it is a string value
 *  only then will the update happen
*/

router.put('/:id', async (req, res) => {
  const userId = req.params.id;

});

// #endregion Updates