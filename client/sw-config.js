module.exports = {
	runtimeCaching: [
		{
			urlPattern: '/auth/*',
			handler: 'networkFirst'
		},
		{
			urlPattern: '/api/*',
			handler: 'networkFirst'
		}
	]
};
