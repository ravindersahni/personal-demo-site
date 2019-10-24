import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';

import * as UserActionTypes from './user.types';
import * as UserActions from './user.actions';
import * as CreditActionTypes from '../credit/credit.types';

const API_ROOT = process.env.REACT_APP_API_ROOT;
axios.defaults.withCredentials = true;

export function* fetchUser() {
	try {
		const res = yield call(axios.get, `${API_ROOT}/auth/current-user`);
		yield put(UserActions.fetchUserSuccess(res.data));
	} catch (error) {
		yield put(UserActions.fetchUserFailure(error));
	}
}

export function* logInUser() {
	yield window.open(`${API_ROOT}/auth/google`, '_top');
}

export function* logOutUser() {
	yield window.open(`${API_ROOT}/auth/logout`, '_self');
}

export function* unlockKoanById({ payload: { id } }) {
	try {
		const res = yield call(axios.post, `${API_ROOT}/api/user/koans`, { koan_id: id });
		yield put(UserActions.unlockKoanByIdSuccess(res.data));
	} catch (error) {
		yield put(UserActions.unlockKoanByIdFailure(error));
	}
}

export function* unlockKoanAfterBuyingCredit({ payload: { koan_id } }) {
	yield put(UserActions.unlockKoanByIdStart(koan_id));
}

export function* onFetchUserStart() {
	yield takeLatest(UserActionTypes.FETCH_USER_START, fetchUser);
}

export function* onLogInUser() {
	yield takeLatest(UserActionTypes.LOG_IN_USER, logInUser);
}

export function* onLogOutUser() {
	yield takeLatest(UserActionTypes.LOG_OUT_USER, logOutUser);
}

export function* onBuyCreditToUnlockKoanSuccess() {
	yield takeLatest(
		CreditActionTypes.BUY_CREDIT_TO_UNLOCK_KOAN_SUCCESS,
		unlockKoanAfterBuyingCredit
	);
}

export function* onUnlockKoanByIdStart() {
	yield takeLatest(UserActionTypes.UNLOCK_KOAN_BY_ID_START, unlockKoanById);
}

export function* userSagas() {
	yield all([
		call(onFetchUserStart),
		call(onLogInUser),
		call(onLogOutUser),
		call(onBuyCreditToUnlockKoanSuccess),
		call(onUnlockKoanByIdStart)
	]);
}
