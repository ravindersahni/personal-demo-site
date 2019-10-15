module.exports = app => {
	app.use(
		require('http-proxy-middleware')([ '/auth', '/api', '/billing', '/koans' ], {
			target: 'http://localhost:5000'
		})
	);
};
