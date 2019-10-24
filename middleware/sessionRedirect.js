const url = require('url');

module.exports = (req, res, next) => {
	req.session.redirectTo = url.parse(req.get('referer')).href;
	next();
};
