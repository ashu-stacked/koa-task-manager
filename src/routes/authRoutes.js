const Router = require('koa-router');
const router = new Router();
const {signUp,logIn,logOut } = require('../controllers/authController'); // Adjust the path

// Associate controller functions with routes
router.post('/signUp', signUp);
router.post('/logIn', logIn);
router.post('/logOut', logOut);
// Define more routes and use corresponding controller functions

module.exports = router;
