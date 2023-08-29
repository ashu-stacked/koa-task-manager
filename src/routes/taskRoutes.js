const Router = require('koa-router');
const router = new Router();
const {createTask,getAllTasks} = require('../controllers/taskController'); // Adjust the path

// Associate controller functions with routes
router.post('/tasks', createTask);
router.get('/tasks', getAllTasks);

// Define more routes and use corresponding controller functions

module.exports = router;
