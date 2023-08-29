const Task = require('../models/Task'); // Adjust the path

// Create a new task
async function createTask(ctx) {
  try {
    const { name, content, taskType, taskPriority, startDate, endDate, creationDate } = ctx.request.body;
    const newTask = await Task.create({
      name,
      content,
      taskType,
      taskPriority,
      startDate,
      endDate,
      creationDate,
    });
    ctx.body = newTask;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal server error' };
  }
}

// Get all tasks
async function getAllTasks(ctx) {
  try {
    const tasks = await Task.findAll();
    ctx.body = tasks;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal server error' };
  }
}

module.exports = {
  createTask,
  getAllTasks,
  // Add more controller functions here as needed
};
