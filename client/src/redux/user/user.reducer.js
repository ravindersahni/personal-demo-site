import {
	FETCH_USER_START,
	FETCH_USER_SUCCESS,
	FETCH_USER_FAILURE,
	LOG_IN_USER,
	LOG_OUT_USER
} from './user.types';
import {
	BUY_CREDIT_SUCCESS,
	BUY_CREDIT_TO_UNLOCK_KOAN_SUCCESS
} from '../credit/credit.types';

export default (state = null, action) => {
	switch (action.type) {
		case FETCH_USER_START:
		case FETCH_USER_SUCCESS:
			return action.payload || false;
		case BUY_CREDIT_SUCCESS:
			return {
				...state,
				credits: action.payload
			};
		case BUY_CREDIT_TO_UNLOCK_KOAN_SUCCESS:
			return {
				...state,
				credits: action.payload.credits
			};
		case FETCH_USER_FAILURE:
		case LOG_IN_USER:
		case LOG_OUT_USER:
		default:
			return state;
	}
};
