import * as UserActionTypes from './user.types';

export const fetchUserStart = () => ({
	type: UserActionTypes.FETCH_USER_START
});

export const fetchUserSuccess = user => ({
	type: UserActionTypes.FETCH_USER_SUCCESS,
	payload: user
});

export const fetchUserFailure = error => ({
	type: UserActionTypes.FETCH_USER_FAILURE,
	payload: error
});

export const logInUser = () => ({
	type: UserActionTypes.LOG_IN_USER
});

export const logOutUser = () => ({
	type: UserActionTypes.LOG_OUT_USER
});
