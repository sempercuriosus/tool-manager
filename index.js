const express = require('express');
// import sequelize connection
const sequelize = require('./config/connection');
// adding the Models
const Models = require('./models/index');

const app = express();
const PORT = process.env.PORT || 3001;

// sequelize.authenticate()
//     .then(() => {
// console.info('Database connection has been established successfully.');

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.info(`App listening on port ${PORT}!`);
    });
})
    .catch((error) => {
        console.error("There was an error when synchronizing the database.", "Here is the error text: ");
        console.error(error);
    });
// })
// .catch((error) => {
//     console.error('Unable to connect to the database:', error);
// });