const app = require('express')();

const env = process.env.NODE_ENV || 'development';
if (env === 'development') {
	require('dotenv').config();
}

app.use('/auth', require('./routes/auth.router'));
app.listen(process.env.PORT);
