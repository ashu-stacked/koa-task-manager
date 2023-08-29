const { Sequelize } = require('sequelize');

// Create a Sequelize instance
const sequelize = new Sequelize('utkarsh','postgres','postgres', {
  host: 'localhost', // Assuming your database is hosted locally
  port: 5000,
  dialect: 'postgres',
});

module.exports = sequelize;
