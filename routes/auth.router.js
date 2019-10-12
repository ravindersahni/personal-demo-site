const authRouter = require('express').Router();
const passport = require('passport');

require('../models/User');
require('../services/passport.service');

module.exports = authRouter
	.get(
		'/google',
		passport.authenticate('google', {
			scope: [ 'profile', 'email' ]
		})
	)
	.get('/google/callback', passport.authenticate('google'), (req, res) =>
		res.redirect('/surveys')
	);
