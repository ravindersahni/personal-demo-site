module.exports = app => {
	app.use(
		require('http-proxy-middleware')('/auth', {
			target: 'http://localhost:5000'
		})
	);
};
