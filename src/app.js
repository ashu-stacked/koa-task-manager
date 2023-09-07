const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const db = require('./config/db'); // Import your pg-promise connection object
const taskRoutes = require('./routes/taskRoutes');
const authRoutes = require('./routes/authRoutes'); // Adjust the path
const errorLogger = require('./middlewares/errorLogger');
const initializeDatabase = require('./db/dbInit');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();
app.use(cors({
  origin: 'http://localhost:3000', // Specify the allowed origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(bodyParser());
app.use(errorLogger);

// Use your task routes
app.use(taskRoutes.routes());
app.use(authRoutes.routes());

// Initialize the database during application startup
initializeDatabase()
  .then(() => {
    // Start the server after the database is initialized
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database initialization error:', error);
  });