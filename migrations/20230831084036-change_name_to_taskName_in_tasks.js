'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Tasks', 'name', 'taskName');
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Tasks', 'taskName', 'name');
  }
};



//to migrate utilize sequelize-cli
/**
 * npx sequelize-cli init
 * npx sequelize-cli db:migrate --url "postgres://postgres:postgres@localhost:5000/utkarsh
 * 
 */