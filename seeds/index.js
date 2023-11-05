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
  console.info('\n----- DATABASE SYNCED -----\n');

  // Seed Tools Table
  await seedTools();
  console.info('\n----- TOOLS SEEDED -----\n');

  // Seed User Table
  await seedUsers();
  console.info('\n----- USERS SEEDED -----\n');

  // Kill Process
  process.exit(0);
};

// Call Seed
seedAll();