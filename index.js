const app = require('express')();
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');

const mongoOpts = {
	useNewUrlParser: true,
	useUnifiedTopology: true
};

const env = process.env.NODE_ENV || 'development';
if (env === 'development') {
	require('dotenv').config();
	mongoose.connect(process.env.MONGO_URI_DEV, mongoOpts);
}
else {
	mongoose.connect(process.env.MONGO_URI_PROD, mongoOpts);
}

app
	.use(
		cookieSession({
			maxAge: 30 * 24 * 60 * 60,
			keys: [ process.env.COOKIE_KEY ]
		})
	)
	.use('/auth', require('./routes/auth.router'))
	.listen(process.env.PORT);
