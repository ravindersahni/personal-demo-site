import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';
import * as KoanActionTypes from './koan.types';
import * as KoanActions from './koan.actions';
import * as CreditActionTypes from '../credit/credit.types';

export function* fetchKoanPreviews() {
	try {
		const res = yield call(axios.get, 'api/koans/previews');
		yield put(KoanActions.fetchKoanPreviewsSuccess(res.data));
	} catch (error) {
		yield put(KoanActions.fetchKoanPreviewsFailure(error));
	}
}

export function* fetchKoans() {
	try {
		const res = yield call(axios.get, 'api/koans');
		yield put(KoanActions.fetchKoansSuccess(res.data));
	} catch (error) {
		yield put(KoanActions.fetchKoansFailure(error));
	}
}

export function* fetchKoanById({ payload: { id } }) {
	try {
		const res = yield call(axios.get, `/api/koans/${id}`);
		yield put(KoanActions.fetchKoanByIdSuccess(res.data));
	} catch (error) {
		yield put(KoanActions.fetchKoanByIdFailure(error));
	}
}

export function* unlockKoanById({ payload: { id } }) {
	try {
		const res = yield call(axios.post, `/api/user/koans`, { koan_id: id });
		yield put(KoanActions.unlockKoanByIdSuccess(res.data));
	} catch (error) {
		yield put(KoanActions.unlockKoanByIdFailure(error));
	}
}

export function* unlockKoanAfterBuyingCredit({ payload: { koan_id } }) {
	yield put(KoanActions.unlockKoanByIdStart(koan_id));
}

export function* onFetchKoanPreviewsStart() {
	yield takeLatest(KoanActionTypes.FETCH_KOAN_PREVIEWS_START, fetchKoanPreviews);
}

export function* onFetchKoansStart() {
	yield takeLatest(KoanActionTypes.FETCH_KOANS_START, fetchKoans);
}

export function* onFetchKoanByIdStart() {
	yield takeLatest(KoanActionTypes.FETCH_KOAN_BY_ID_START, fetchKoanById);
}

export function* onBuyCreditToUnlockKoanSuccess() {
	yield takeLatest(
		CreditActionTypes.BUY_CREDIT_TO_UNLOCK_KOAN_SUCCESS,
		unlockKoanAfterBuyingCredit
	);
}

export function* onUnlockKoanByIdStart() {
	yield takeLatest(KoanActionTypes.UNLOCK_KOAN_BY_ID_START, unlockKoanById);
}

export function* koanSagas() {
	yield all([
		call(onFetchKoansStart),
		call(onFetchKoanByIdStart),
		call(onFetchKoanPreviewsStart),
		call(onBuyCreditToUnlockKoanSuccess),
		call(onUnlockKoanByIdStart)
	]);
}
