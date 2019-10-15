const express = require('express');
const app = express();
const compression = require('compression');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const enforce = require('express-sslify');
const path = require('path');
const mongodb = require('./mongodb/mongodb.connect');
const authRouter = require('./routes/auth.router');
const apiRouter = require('./routes/api.router');
const billingRouter = require('./routes/billing.router');
const errorMiddleware = require('./middleware/error');

const env = process.env.NODE_ENV || 'development';
if (env === 'development') {
	require('dotenv').config();
}

mongodb.connect();

app.use(express.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60,
		keys: [ process.env.COOKIE_KEY ]
	})
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);
app.use('/api', apiRouter);
app.use('/billing', billingRouter);
app.get('/serviceWorker.js', (req, res) => {
	res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

app.use(errorMiddleware);

if (process.env.NODE_ENV === 'production') {
	app.use(enforce.HTTPS({ trustProtoHeader: true }));
	app.use(compression());
	app.use(express.static(path.join(__dirname, 'client', 'build')));
	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	);
}

module.exports = app;
