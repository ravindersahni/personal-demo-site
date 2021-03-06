import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';
import * as WeatherActionTypes from './weather.types';
import * as WeatherActions from './weather.actions';

const API_ROOT = process.env.REACT_APP_API_ROOT;
axios.defaults.withCredentials = true;

export function* getForecast() {
	try {
		const res = yield call(axios.get, `${API_ROOT}/api/weather/40.44062, -79.99589`);
		yield put(WeatherActions.getForecastSuccess(res.data));
	} catch (error) {
		yield put(WeatherActions.getForecastFailure(error));
	}
}

export function* onGetForecastStart() {
	yield takeLatest(WeatherActionTypes.GET_FORECAST_START, getForecast);
}

export function* weatherSagas() {
	yield all([ call(onGetForecastStart) ]);
}
