import { all, call } from 'redux-saga/effects';
import { userSagas } from './user/user.sagas';
import { creditSagas } from './credit/credit.sagas';
import { koanSagas } from './koan/koan.sagas';
import { weatherSagas } from './weather/weather.sagas';

export default function* rootSaga() {
	yield all([ call(userSagas), call(creditSagas), call(koanSagas), call(weatherSagas) ]);
}
