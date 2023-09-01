// queries.js

const createTableUsers = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    useremail VARCHAR(255) NOT NULL,
    userpassword VARCHAR(255) NOT NULL
  );
`;

const createTableTasks = `
  CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id),
    taskname VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    tasktype VARCHAR(50) NOT NULL,
    taskpriority INT NOT NULL,
    startdate DATE NOT NULL,
    enddate DATE NOT NULL,
    creationdate TIMESTAMP NOT NULL DEFAULT NOW()
  );
`;

module.exports = {
  createTableUsers,
  createTableTasks,
};
