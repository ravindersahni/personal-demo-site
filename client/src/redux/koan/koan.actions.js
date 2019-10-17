import * as KoanActionTypes from './koan.types';

export const fetchKoansStart = () => ({
	type: KoanActionTypes.FETCH_KOANS_START
});

export const fetchKoansSuccess = koans => ({
	type: KoanActionTypes.FETCH_KOANS_SUCCESS,
	payload: koans
});

export const fetchKoansFailure = error => ({
	type: KoanActionTypes.FETCH_KOANS_FAILURE,
	payload: error
});

export const fetchKoanByIdStart = id => ({
	type: KoanActionTypes.FETCH_KOAN_BY_ID_START,
	id
});

export const fetchKoanByIdSuccess = koan => ({
	type: KoanActionTypes.FETCH_KOAN_BY_ID_SUCCESS,
	payload: koan
});

export const fetchKoanByIdFailure = error => ({
	type: KoanActionTypes.FETCH_KOAN_BY_ID_FAILURE,
	payload: error
});
