const express = require('express');
// controllers
const routes = require('./controllers');
// sequelize connection
const sequelize = require('./config/connection');
// adding the Models
const Models = require('./models/index');

const app = express();
const PORT = process.env.PORT || 3001;

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
