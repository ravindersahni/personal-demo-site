const express = require('express');
const app = express();
const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
	require('dotenv').config();
}

app.get('/', (req, res) => res.json({ look: "we're live" }));

app.listen(process.env.PORT);
