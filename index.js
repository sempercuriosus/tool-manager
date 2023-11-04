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

const app = express();
const PORT = process.env.PORT || 3001;

// cookie timeout @ 2 hours
// 1000ms (required by session) * 12 hours * 60 minutes * 60 seconds
const cookieMaxAge = (1000 * 12 * 60 * 60);

// session
const sess = {
    secret: 'Super duper secret secret',
    cookie: {
        // do NOT directly set the expires property. 
        // https://github.com/expressjs/session#cookieexpires
        maxAge: cookieMaxAge,
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.info(`App listening on port ${PORT}! You are running.`);
    });
})
    .catch((error) => {
        console.error("There was an error when synchronizing the database.", "Here is the error text: ");
        console.error(error);
    });
