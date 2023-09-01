const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');

const signUp = async (ctx) => {
  try {
    const { username, useremail, userpassword } = ctx.request.body;
    
    // Check if a user with the given username or email already exists
    const existingUser = await db.oneOrNone(
      'SELECT * FROM users WHERE "username" = $1 OR "useremail" = $2',
      [username, useremail]
    );

    if (existingUser) {
      ctx.status = 409;
      throw new Error('User already exists with this username or email');
    }

    // Hash the user's password before storing it in the database
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userpassword, saltRounds);

    // Create a new user in the database
    const newUser = await db.one(
      'INSERT INTO users ("username", "useremail", "userpassword") VALUES ($1, $2, $3) RETURNING username, useremail',
      [username, useremail, hashedPassword]
    );

    ctx.body = {
      message: 'User created successfully',
      user: {
        username: newUser.username,
        useremail: newUser.useremail,
      },
    };
  } catch (error) {
    throw error;
  }
};

const logIn = async (ctx) => {
  try {
    const { useremail, userpassword } = ctx.request.body;

    // Find the user by email
    const user = await db.oneOrNone('SELECT * FROM users WHERE useremail = $1', [
      useremail,
    ]);

    if (!user || !bcrypt.compareSync(userpassword, user.userpassword)) {
      ctx.status = 403;
      throw new Error('No such user exists. Please sign up first');
    }

    console.log('This user is logged in successfully', user);

    // Generate a JWT token
    const token = jwtGenerator({
      username: user.username,
      useremail: user.useremail,
      id:user.id
    });

    // Set the token in a cookie as HttpOnly
    ctx.cookies.set('authToken', token, {
      httpOnly: true,
    });

    const { username } = user;

    ctx.body = { username, useremail, token };
  } catch (error) {
    throw error;
  }
};

module.exports = { signUp, logIn };
