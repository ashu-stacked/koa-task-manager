const Koa = require('koa');
const sequelize = require('./config/db');
const bodyParser = require('koa-bodyparser');
const taskRoutes = require('./routes/taskRoutes'); // Adjust the path
const app = new Koa();

app.use(bodyParser());

// Use your task routes
app.use(taskRoutes.routes());

// Connect to the database and sync models
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database');
    await sequelize.sync();
    console.log('Database synced with models');
  } catch (error) {
    console.error('Unable to connect or sync with the database:', error);
  }
})();


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});