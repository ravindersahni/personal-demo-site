const app = require('express')();
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');

const env = process.env.NODE_ENV || 'development';
if (env === 'development') {
	require('dotenv').config();
}

mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app
	.use(
		cookieSession({
			maxAge: 30 * 24 * 60 * 60,
			keys: [ process.env.COOKIE_KEY ]
		})
	)
	.use(passport.initialize())
	.use(passport.session())
	.use('/auth', require('./routes/auth.router'))
	.use('/api', require('./routes/api.router'))
	.listen(process.env.PORT);
