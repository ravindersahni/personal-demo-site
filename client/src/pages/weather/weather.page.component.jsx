import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getForecastStart } from '../../redux/weather/weather.actions';
import WithErrorBoundary from '../../components/with-error-boundary/with-error-boundary.component';

export const WeatherPage = ({ getForecastStart, forecast }) => {
	useEffect(
		() => {
			getForecastStart();
		},
		[ getForecastStart ]
	);
	return <h1>Weather</h1>;
};

const mapStateToProps = ({ weather }) => ({
	forecast: weather.forecast
});

export default WithErrorBoundary(
	connect(mapStateToProps, { getForecastStart })(WeatherPage)
);
