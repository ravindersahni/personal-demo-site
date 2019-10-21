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

export const unlockKoanByIdStart = koan_id => ({
	type: UserActionTypes.UNLOCK_KOAN_BY_ID_START,
	payload: { id: koan_id }
});

export const unlockKoanByIdSuccess = user => ({
	type: UserActionTypes.UNLOCK_KOAN_BY_ID_SUCCESS,
	payload: user
});

export const unlockKoanByIdFailure = error => ({
	type: UserActionTypes.UNLOCK_KOAN_BY_ID_FAILURE,
	payload: error
});
