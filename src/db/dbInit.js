// dbInit.js

const db = require('../config/db'); // Import your db module
const { createTableUsers, createTableTasks } = require('../queries/queries'); // Import your table creation queries

async function initializeDatabase() {
  try {
    // Create users table
    await db.none(createTableUsers);

    // Create tasks table
    await db.none(createTableTasks);

    console.log('Tables created successfully');
  } catch (error) {
    console.error('Error creating tables:', error);
  }
}

module.exports = initializeDatabase;
