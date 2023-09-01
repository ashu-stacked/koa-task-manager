const { DataTypes } = require('sequelize');
const sequelizeInstance= require('../config/db');

const Task = sequelizeInstance.define('Task', {
  taskName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  taskType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  taskPriority: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  creationDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Task;
