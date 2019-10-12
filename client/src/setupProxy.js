module.exports = app => {
	app.use(
		require('http-proxy-middleware')([ '/auth', '/api' ], {
			target: 'http://localhost:5000'
		})
	);
};
