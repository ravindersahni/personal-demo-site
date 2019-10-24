import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';
import * as KoanActionTypes from './koan.types';
import * as KoanActions from './koan.actions';

const API_ROOT = process.env.REACT_APP_API_ROOT;

export function* fetchKoanPreviews() {
	try {
		const res = yield call(axios.get, `${API_ROOT}/api/koans/previews`);
		yield put(KoanActions.fetchKoanPreviewsSuccess(res.data));
	} catch (error) {
		yield put(KoanActions.fetchKoanPreviewsFailure(error));
	}
}

export function* fetchKoans() {
	try {
		const res = yield call(axios.get, `${API_ROOT}/api/koans`);
		yield put(KoanActions.fetchKoansSuccess(res.data));
	} catch (error) {
		yield put(KoanActions.fetchKoansFailure(error));
	}
}

export function* fetchKoanById({ payload: { id } }) {
	try {
		const res = yield call(axios.get, `${API_ROOT}/api/koans/${id}`);
		yield put(KoanActions.fetchKoanByIdSuccess(res.data));
	} catch (error) {
		yield put(KoanActions.fetchKoanByIdFailure(error));
	}
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

export function* koanSagas() {
	yield all([
		call(onFetchKoansStart),
		call(onFetchKoanByIdStart),
		call(onFetchKoanPreviewsStart)
	]);
}
