module.exports = (req, res, next) => {
	if (!req.user) {
		const error = new Error('You cannot perform this action without logging in.');
		error.statusCode = 401;
		return next(error);
	}
	next();
};
