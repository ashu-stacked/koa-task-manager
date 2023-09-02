const Router = require('koa-router');
const router = new Router();
const {createTask,getAllTasks,getTaskById,deleteTaskById,updateTaskById} = require('../controllers/taskController'); // Adjust the path
const verifyJwt = require('../middlewares/verifyJwt');

//putting this verification middleware on top so that it executes first and then rest of the routes
router.use(verifyJwt)

// Associate controller functions with routes
router.post('/tasks', createTask);
router.get('/tasks', getAllTasks);
router.get('/tasks/:id', getTaskById);
router.put('/tasks/:id',updateTaskById)
router.delete('/tasks/:id',deleteTaskById)
// Define more routes and use corresponding controller functions

module.exports = router;
