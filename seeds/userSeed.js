const { Users } = require('../models');

const userList = [
  {
    "first_name": "Tyler",
    "last_name": "",
    "email": "tyrush1911@outlook.com",
    "password": "password12345"
  },
  {
    "first_name": "Eric",
    "last_name": "",
    "email": "hulse@hey.com",
    "password": "password12345"
  },
  {
    "first_name": "Oleksandr",
    "last_name": "",
    "email": "alexbugayov30@gmail.com",
    "password": "password12345"
  },
  {
    "first_name": "Modeste",
    "last_name": "",
    "email": "movank@gmail.com",
    "password": "password12345"
  },
];


// create seed function
const seedUsers = () => Users.bulkCreate(userList);

// export seed data
module.exports = seedUsers;
