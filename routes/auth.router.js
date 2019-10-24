const router = require('express').Router();
const passport = require('passport');
const authController = require('../controllers/auth.controller');
const sessionRedirect = require('../middleware/sessionRedirect');

require('../models/user.model');
require('../services/passport.service');

router.get(
	'/google',
	sessionRedirect,
	passport.authenticate('google', {
		scope: [ 'profile', 'email' ],
		display: 'popup'
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
