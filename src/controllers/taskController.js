const Task = require("../models/Task");

// Create a new task
const createTask = async (ctx) => {
  try {
    const {
      taskName,
      content,
      taskType,
      taskPriority,
      startDate,
      endDate,
      creationDate,
    } = ctx.request.body;
    const newTask = await Task.create({
      taskName,
      content,
      taskType,
      taskPriority,
      startDate,
      endDate,
      creationDate,
    });
    ctx.body = newTask;
  } catch (error) {
    throw error;
  }
};

// Get all tasks
const getAllTasks = async (ctx) => {
  try {
    const tasks = await Task.findAll();
    ctx.body = tasks;
  } catch (error) {
    throw error;
  }
};

//Get a task by id
const getTaskById = async (ctx) => {
  const id = ctx.params.id;
  try {
    const task = await Task.findByPk(id);
    if (!task) {
      ctx.status = 404;
      //ctx.body = { error: "Task not found" };
      throw new Error('Task not found');
    } else {
      ctx.body = task;
    }
  } catch (error) {
    throw error;
  }
};

//updating a particular task by id
const updateTaskById = async (ctx) => {
  const id = ctx.params.id;
  const updates = ctx.request.body;
  try {
    const task = await Task.findByPk(id);
    if (!task) {
      ctx.status = 404;
      throw new Error('Task not found');
    } else {
      await task.update(updates);
      ctx.body = { message: "Task updated successfully", task };
    }
  } catch (error) {
    throw error;
  }
};

//delete a task by id
const deleteTaskById = async (ctx) => {
  const id = ctx.params.id;
  try {
    const task = await Task.findByPk(id);
    if (!task) {
      ctx.status = 404;
      throw new Error('Task not found');
    } else {
      await task.destroy();
      ctx.body = { message: "Task deleted successfully" };
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById
  // Add more controller functions here as needed
};

//api design -

/**
 * 1. create new task
 * 2. get all tasks
 * 3. get task by id
 * 4.update task by id
 */
