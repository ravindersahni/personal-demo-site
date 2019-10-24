const express = require('express');
const app = express();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
	require('dotenv').config();
}

const cors = require('cors');
const compression = require('compression');
const passport = require('passport');
const cookieSession = require('cookie-session');
const enforce = require('express-sslify');
const path = require('path');
const mongodb = require('./mongodb/mongodb.connect');
const authRouter = require('./routes/auth.router');
const apiRouter = require('./routes/api.router');
const errorMiddleware = require('./middleware/error');

mongodb.connect();

app.use(express.json());
app.use(
	cors({
		origin: isDev || /^https:\/\/(www\.)?ravindersahni\.com$/,
		credentials: true
	})
);
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

app.get('/serviceWorker.js', (req, res) => {
	res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

if (process.env.NODE_ENV === 'production') {
	app.use(enforce.HTTPS({ trustProtoHeader: true }));
	app.use(compression());
	app.use(express.static(path.join(__dirname, 'client', 'build')));
	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	);
}

app.use(errorMiddleware);

module.exports = app;
