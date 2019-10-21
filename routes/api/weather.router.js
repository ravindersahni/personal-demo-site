const express = require('express');
const router = express.Router();
const weatherController = require('../../controllers/api/weather.controller');

router.get('/:coordinates', weatherController.getForecast);

module.exports = router;
