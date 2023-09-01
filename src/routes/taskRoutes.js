const Router = require('koa-router');
const router = new Router();
const {createTask,getAllTasks,getTaskById,deleteTaskById,updateTaskById} = require('../controllers/taskController'); // Adjust the path

// Associate controller functions with routes
router.post('/tasks', createTask);
router.get('/tasks', getAllTasks);
router.get('/tasks/:id', getTaskById);
router.patch('/tasks/:id',updateTaskById)
router.delete('/tasks/:id',deleteTaskById)
// Define more routes and use corresponding controller functions

module.exports = router;
