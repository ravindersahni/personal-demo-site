const authRouter = require('express').Router();
const passport = require('passport');
require('../services/passport.service');

module.exports = authRouter
	.get(
		'/google',
		passport.authenticate('google', {
			scope: [ 'profile', 'email' ]
		})
	)
	.get('/google/callback', passport.authenticate('google'));
