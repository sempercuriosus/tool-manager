/*
  * Application Main file to start and run the application
  * 
  * This should have been called Server.js, probably
*/
// express 
const express = require('express');
// controllers
const routes = require('./controllers');
// sequelize connection
const sequelize = require('./config/connection');
// adding the Models
const Models = require('./models/index');
// sessions
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// View Engine
const exphbs = require('express-handlebars');
// Helpers
const helpers = require('./utils/helpers');

// Express Instance
const app = express();
const PORT = process.env.PORT || 3001;

// Handelbars
const hbs = exphbs.create();

// Cookie Timeout @2 hours
// 1000ms (required by session) * 12 hours * 60 minutes * 60 seconds
const cookieMaxAge = (1000 * 12 * 60 * 60);

// Session Delaration
const sess = {
    secret: 'Super duper secret secret',
    cookie: {
        // do NOT directly set the expires property. 
        // https://github.com/expressjs/session#cookieexpires
        maxAge: cookieMaxAge,
    },
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize
    })
};

// Setting the session
app.use(session(sess));

// Setting the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(routes);

// Sequelize 
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.info(`App listening on port ${PORT}! You are running.`);
    });
})
    .catch((error) => {
        console.error("There was an error when synchronizing the database.", "Here is the error text: ");
        console.error(error);
    });
