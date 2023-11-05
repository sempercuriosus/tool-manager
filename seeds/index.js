/*
  * Entry point for the Seed Data
  * 
  * 
*/
const seedTools = require('./toolSeed');
const seedUsers = require('./userSeed');

const sequelize = require('../config/connection');

const seedAll = async () => {
    // sync the db models
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedTools();
    console.log('\n----- TOOLS SEEDED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');


    process.exit(0);
};

seedAll();
