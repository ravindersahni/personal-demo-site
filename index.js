const PORT = process.env.PORT || 5000;

require('./server').listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
