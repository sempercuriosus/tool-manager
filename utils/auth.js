
/*
  * Directing users who are not currently logged in to the login page
  * 
  * 
*/
const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        // if the user is not logged in, they need to be sent to do so
        res.redirect('/login');
    } else {
        // if they are then passing this request along to the next matching route.
        next();
    }
};

module.exports = withAuth;
