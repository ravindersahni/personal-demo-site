const express = require('express');
const app = express();

const env = process.env.NODE_ENV || 'development';
if (env === 'development') {
	require('dotenv').config();
}

const authRouther = require('./routes/auth.router');

app.use('/auth', authRouther);
app.listen(process.env.PORT);
