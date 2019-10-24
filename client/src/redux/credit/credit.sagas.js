import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';

import * as CreditActionTypes from './credit.types';
import * as CreditActions from './credit.actions';

const API_ROOT = process.env.REACT_APP_API_ROOT;

export function* buyCredit({ payload }) {
	try {
		const { data } = yield call(axios.post, `${API_ROOT}/api/billing/stripe`, payload);
		yield put(CreditActions.buyCreditSuccess(data));
	} catch (error) {
		yield put(CreditActions.buyCreditFailure(error));
	}
}

export function* buyCreditToUnlockKoan({ payload: { token, koan_id } }) {
	try {
		const res = yield call(axios.post, `${API_ROOT}/api/billing/stripe`, token);
		yield put(CreditActions.buyCreditToUnlockKoanSuccess(res.data, koan_id));
	} catch (error) {
		yield put(CreditActions.buyCreditToUnlockKoanFailure(error));
	}
}

export function* onBuyCreditStart() {
	yield takeLatest(CreditActionTypes.BUY_CREDIT_START, buyCredit);
}

export function* onBuyCreditToUnlockKoanStart() {
	yield takeLatest(
		CreditActionTypes.BUY_CREDIT_TO_UNLOCK_KOAN_START,
		buyCreditToUnlockKoan
	);
}

export function* creditSagas() {
	yield all([ call(onBuyCreditStart), call(onBuyCreditToUnlockKoanStart) ]);
}
