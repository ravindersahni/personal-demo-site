const axios = require('axios');

exports.getForecast = async (req, res, next) => {
	const { coordinates } = req.params || '40.44062, -79.99589';
	const secretKey = process.env.DARK_SKY_SECRET_KEY;
	const forecastURL = `https://api.darksky.net/forecast/${secretKey}/${coordinates}`;

	try {
		const forecast = await axios.get(forecastURL);
		res.json(forecast.data);
	} catch (error) {
		next(error);
	}
};
