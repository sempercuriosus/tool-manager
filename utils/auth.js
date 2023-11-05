/*
  * Extending the Request to see if the user is logged in
*/
const withAuth = (req, res, next) => {
    // the user is NOT logged in ---> redirect to login page
    if (!req.session.logged_in) {
        res.redirect('/login');
    }
    // the user IS logged in ---> passing this request along to the next matching route
    else {
        next();
    }
};

module.exports = withAuth;
