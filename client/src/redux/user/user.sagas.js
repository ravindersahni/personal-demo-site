import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';

import * as UserActionTypes from './user.types';
import * as UserActions from './user.actions';

export function* fetchUser() {
	try {
		const res = yield call(axios.get, '/auth/current-user');
		yield put(UserActions.fetchUserSuccess(res.data));
	} catch (error) {
		yield put(UserActions.fetchUserFailure(error));
	}
}

export function* logInUser() {
	yield window.open('/auth/google', '_top');
}

export function* logOutUser() {
	yield window.open('/auth/logout', '_self');
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

export function* userSagas() {
	yield all([ call(onFetchUserStart), call(onLogInUser), call(onLogOutUser) ]);
}
