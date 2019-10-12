const apiRouter = require('express').Router();

module.exports = apiRouter
	.get('/logout', (req, res) => {
		req.logout();
		res.redirect('/auth/google');
	})
	.get('/current-user', (req, res) => res.send(req.user));
