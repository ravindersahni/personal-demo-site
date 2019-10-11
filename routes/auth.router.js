const authRouter = require('express').Router();
const passport = require('passport');

require('../models/User');
require('../services/passport.service');

module.exports = authRouter
	.use(passport.initialize())
	.use(passport.session())
	.get(
		'/google',
		passport.authenticate('google', {
			scope: [ 'profile', 'email' ]
		})
	)
	.get('/google/callback', passport.authenticate('google'))
	.get('/logout', (req, res) => {
		req.logout();
		res.redirect('/auth/google');
	})
	.get('/current-user', (req, res) => res.send(req.user));
