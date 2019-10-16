module.exports = {
	navigateFallback: 'index.html',
	navigateFallbackWhitelist: [ /^(?!\/(auth|api)\/)/ ],
	runtimeCaching: [
		{
			urlPattern: '/auth',
			handler: 'networkFirst'
		},
		{
			urlPattern: '/api',
			handler: 'networkFirst'
		}
	]
};
