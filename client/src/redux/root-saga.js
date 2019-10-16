import { all, call } from 'redux-saga/effects';
import { userSagas } from './user/user.sagas';
import { creditSagas } from './credit/credit.sagas';

export default function* rootSaga() {
	yield all([ call(userSagas), call(creditSagas) ]);
}
