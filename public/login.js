const bcrypt = require('bcrypt');
const { Users } = require('../models');

const login = async (email, password) => {
  try {
    const user = await Users.findOne({ where: { email } });

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        // Password is valid, so the login is successful
        return { success: true, user };
      }
    }

    // Login failed
    return { success: false, message: 'Invalid email or password' };
  } catch (error) {
    return { success: false, message: 'An error occurred during login' };
  }
};



