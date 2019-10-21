import * as WeatherActionTypes from './weather.types';

export const getForecastStart = () => ({
	type: WeatherActionTypes.GET_FORECAST_START
});

export const getForecastSuccess = forecast => ({
	type: WeatherActionTypes.GET_FORECAST_SUCCESS,
	payload: forecast
});

export const getForecastFailure = error => ({
	type: WeatherActionTypes.GET_FORECAST_FAILURE,
	payload: error
});
