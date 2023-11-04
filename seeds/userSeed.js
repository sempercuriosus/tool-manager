const bcrypt = require('bcrypt');
const { Users } = require('../models');

const userList = [
  {
    "first_name": "Tyler",
    "last_name": "Stubbs",
    "email": "tyrush1911@outlook.com",
    "password": "password12345"
  },
  {
    "first_name": "Eric",
    "last_name": "Hulse",
    "email": "hulse@hey.com",
    "password": "password12345"
  },
  {
    "first_name": "Oleksandr",
    "last_name": "Buhaiov",
    "email": "alexbugayov30@gmail.com",
    "password": "password12345"
  },
  {
    "first_name": "Modeste",
    "last_name": "Valens",
    "email": "movank@gmail.com",
    "password": "password12345"
  },
  {
    "first_name": "Sebastian",
    "last_name": "Mena",
    "email": "alain.mena@wimzel.com",
    "password": "password12345"
  },

];


// create seed function
const seedUsers = async () => {
  for (const seed of userList) {
    const hashedPassword = await bcrypt.hash(seed.password, 10);
    seed.password = hashedPassword;
  }

  return Users.bulkCreate(userList);
};

// export seed data
module.exports = seedUsers;
