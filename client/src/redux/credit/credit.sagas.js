import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';

import * as CreditActionTypes from './credit.types';
import * as CreditActions from './credit.actions';

export function* buyCredit({ payload }) {
	console.log('MY TOKEN', payload);
	try {
		const res = yield call(axios.post, 'api/billing/stripe', payload);
		yield put(CreditActions.buyCreditSuccess(res.data));
	} catch (error) {
		yield put(CreditActions.buyCreditFailure(error));
	}
}

export function* onBuyCreditStart() {
	yield takeLatest(CreditActionTypes.BUY_CREDIT_START, buyCredit);
}

export function* creditSagas() {
	yield all([ call(onBuyCreditStart) ]);
}
