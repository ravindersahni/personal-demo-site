module.exports = app => {
	app.use(
		require('http-proxy-middleware')([ '/auth', '/api', '/billing' ], {
			target: 'http://localhost:5000'
		})
	);
};
