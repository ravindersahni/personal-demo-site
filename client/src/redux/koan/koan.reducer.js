import {
	FETCH_KOANS_START,
	FETCH_KOANS_SUCCESS,
	FETCH_KOANS_FAILURE
} from './koan.types';

export default (state = null, action) => {
	switch (action.type) {
		case FETCH_KOANS_SUCCESS:
			return action.payload;
		case FETCH_KOANS_FAILURE:
		case FETCH_KOANS_START:
		default:
			return state;
	}
};
