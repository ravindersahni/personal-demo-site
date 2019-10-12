const apiRouter = require('express').Router();

module.exports = apiRouter
	.get('/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	})
	.get('/current-user', (req, res) => res.send(req.user));
