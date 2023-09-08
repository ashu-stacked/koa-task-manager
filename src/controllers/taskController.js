const db = require('../config/db');
const jwt = require('jsonwebtoken');

// Create a new task
const createTask = async (ctx) => {
  try {
    const userId = ctx.state.user.id
    const {
      taskname,
      content,
      tasktype,
      taskpriority,
      startdate,
      enddate,
      creationdate,
    } = ctx.request.body;

    // Create a new task in the database
    const newTask = await db.one(
      'INSERT INTO tasks (user_id, taskname, content, tasktype, taskpriority, startdate, enddate, creationdate) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [userId, taskname, content, tasktype, taskpriority, startdate, enddate, creationdate]
    );

    ctx.body = newTask;
  } catch (error) {
    throw error;
  }
};

// Get all tasks
const getAllTasks = async (ctx) => {
  try {
    const userLoggedIn = ctx.state.user
    const id = userLoggedIn.id;
    // Retrieve all tasks from the database
    const tasks = await db.any('SELECT * FROM tasks WHERE user_id = $1', [id]);
    ctx.body = tasks;
  } catch (error) {
    throw error;
  }
};

// Get a task by id
const getTaskById = async (ctx) => {
  const id = ctx.params.id;
  try {
    // Retrieve a task by id from the database
    const task = await db.oneOrNone('SELECT * FROM tasks WHERE id = $1', [id]);

    if (!task) {
      ctx.status = 404;
      throw new Error('Task not found');
    } else {
      ctx.body = task;
    }
  } catch (error) {
    throw error;
  }
};

// Update a task by id
const updateTaskById = async (ctx) => {
  const id = ctx.params.id;
  const updates = ctx.request.body;
  try {
    // Retrieve a task by id from the database
    const task = await db.oneOrNone('SELECT * FROM tasks WHERE id = $1', [id]);

    if (!task) {
      ctx.status = 404;
      throw new Error('Task not found');
    } else {
      // Update the task in the database
      await db.none(
        'UPDATE tasks SET taskname = $1, content = $2, tasktype = $3, taskpriority = $4, startdate = $5, enddate = $6, creationdate = $7 WHERE id = $8',
        [
          updates.taskname,
          updates.content,
          updates.tasktype,
          updates.taskpriority,
          updates.startdate,
          updates.enddate,
          updates.creationdate,
          id,
        ]
      );

      ctx.body = { message: 'Task updated successfully', task };
    }
  } catch (error) {
    throw error;
  }
};

// Delete a task by id
const deleteTaskById = async (ctx) => {
  const id = ctx.params.id;
  try {
    // Retrieve a task by id from the database
    const task = await db.oneOrNone('SELECT * FROM tasks WHERE id = $1', [id]);

    if (!task) {
      ctx.status = 404;
      throw new Error('Task not found');
    } else {
      // Delete the task from the database
      await db.none('DELETE FROM tasks WHERE id = $1', [id]);

      ctx.body = { message: 'Task deleted successfully' };
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
  deleteTaskById,
  // Add more controller functions here as needed
};
