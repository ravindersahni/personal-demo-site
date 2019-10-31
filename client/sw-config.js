module.exports = {
	navigateFallback: 'index.html',
	navigateFallbackWhitelist: [ /^(?!\/(auth|api)\/)/ ],
	runtimeCaching: [
		{
			urlPattern: /^https:\/\/api\.ravindersahni\.com/,
			handler: 'networkFirst'
		},
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
