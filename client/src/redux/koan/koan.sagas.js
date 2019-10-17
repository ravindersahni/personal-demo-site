import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';

import * as KoanActionTypes from './koan.types';
import * as KoanActions from './koan.actions';

export function* fetchKoans() {
	try {
		const res = yield call(axios.get, 'api/koans');
		yield put(KoanActions.fetchKoansSuccess(res.data));
	} catch (error) {
		yield put(KoanActions.fetchKoansFailure(error));
	}
}

export function* fetchKoanById({ id }) {
	try {
		const res = yield call(axios.get, `/api/koans/${id}`);
		yield put(KoanActions.fetchKoanByIdSuccess(res.data));
	} catch (error) {
		yield put(KoanActions.fetchKoanByIdFailure(error));
	}
}

export function* onFetchKoansStart() {
	yield takeLatest(KoanActionTypes.FETCH_KOANS_START, fetchKoans);
}

export function* onFetchKoanByIdStart() {
	yield takeLatest(KoanActionTypes.FETCH_KOAN_BY_ID_START, fetchKoanById);
}

export function* koanSagas() {
	yield all([ call(onFetchKoansStart), call(onFetchKoanByIdStart) ]);
}
