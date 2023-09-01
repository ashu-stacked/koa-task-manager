const Koa = require('koa');
const sequelizeInstance = require('./config/db');
const bodyParser = require('koa-bodyparser');
const taskRoutes = require('./routes/taskRoutes'); 
const authRoutes = require('./routes/authRoutes'); // Adjust the path
const errorLogger = require('./middlewares/errorLogger');
const app = new Koa();

app.use(bodyParser());
app.use(errorLogger)
// Use your task routes
app.use(taskRoutes.routes());
app.use(authRoutes.routes());

// Connect to the database and sync models
(async () => {
  try {
    await sequelizeInstance.authenticate();
    console.log('Connected to the database');
    await sequelizeInstance.sync();
    console.log('Database synced with models');
  } catch (error) {
    throw error;
  }
})();


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});