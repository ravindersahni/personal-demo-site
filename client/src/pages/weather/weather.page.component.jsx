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

	return (
		<React.Fragment>
			<h1>Current Weather (data dump for now)</h1>
			<dl>
				{forecast ? (
					Object.entries(forecast.currently).map(([ k, v ]) => (
						<React.Fragment key={k}>
							<dt>{k}</dt>
							<dd>{v}</dd>
						</React.Fragment>
					))
				) : null}
			</dl>
		</React.Fragment>
	);
};

const mapStateToProps = ({ weather }) => ({
	forecast: weather.forecast
});

export default WithErrorBoundary(
	connect(mapStateToProps, { getForecastStart })(WeatherPage)
);
