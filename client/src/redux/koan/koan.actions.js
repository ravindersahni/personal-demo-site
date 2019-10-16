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
