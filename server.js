const express = require('express');
const compression = require('compression');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const enforce = require('express-sslify');
const path = require('path');

const app = express();

const env = process.env.NODE_ENV || 'development';
if (env === 'development') {
	require('dotenv').config();
}

mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app
	.use(express.json())
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
	.use('/billing', require('./routes/billing.router'))
	.get('/serviceWorker.js', (req, res) => {
		res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
	})
	.use((err, req, res, next) => {
		console.error(err.stack);
		res.status(err.statusCode || 500).send(err.message);
	});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client', 'build')));
	app.use(compression());
	app.use(enforce.HTTPS({ trustProtoHeader: true }));
	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	);
}

module.exports = app;
