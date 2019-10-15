const router = require('express').Router();
const passport = require('passport');
const authController = require('../controllers/auth.controller');

require('../models/user.model');
require('../services/passport.service');

router.get(
	'/google',
	passport.authenticate('google', {
		scope: [ 'profile', 'email' ]
	})
);

router.get(
	'/google/callback',
	passport.authenticate('google'),
	authController.getGoogleCallback
);

router.get('/logout', authController.performLogout);
router.get('/current-user', authController.getCurrentUser);

module.exports = router;
