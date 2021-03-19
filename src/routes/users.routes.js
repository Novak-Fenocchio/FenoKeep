const { Router } = require('express');
const router = Router();

const { renderSignInForm, signIn, renderSignUpForm, signUp, logOut } = require('../controllers/users.controller');

/* Sign up */
router.get('/users/signUp', renderSignUpForm);
router.post('/users/signUp', signUp);

/* Sign In */
router.get('/users/signIn', renderSignInForm);
router.post('/users/signIn', signIn);

/* LogOut */
router.get('/users/logout', logOut); 

module.exports = router;
