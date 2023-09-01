const Router = require('koa-router');
const router = new Router();
const {signUp } = require('../controllers/authController'); // Adjust the path

// Associate controller functions with routes
router.post('/signUp', signUp);
// Define more routes and use corresponding controller functions

module.exports = router;
