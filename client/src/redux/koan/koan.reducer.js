import {
	FETCH_KOANS_START,
	FETCH_KOANS_SUCCESS,
	FETCH_KOANS_FAILURE,
	FETCH_KOAN_BY_ID_START,
	FETCH_KOAN_BY_ID_SUCCESS,
	FETCH_KOAN_BY_ID_FAILURE
} from './koan.types';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_KOANS_SUCCESS:
			return {
				...state,
				koans: action.payload
			};
		case FETCH_KOAN_BY_ID_SUCCESS:
			return {
				...state,
				selectedKoan: action.payload
			};
		case FETCH_KOAN_BY_ID_FAILURE:
		case FETCH_KOAN_BY_ID_START:
		case FETCH_KOANS_FAILURE:
		case FETCH_KOANS_START:
		default:
			return state;
	}
};
