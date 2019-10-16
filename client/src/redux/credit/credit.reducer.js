import { BUY_CREDIT_START, BUY_CREDIT_SUCCESS, BUY_CREDIT_FAILURE } from './credit.types';

export default (state = {}, action) => {
	switch (action.type) {
		case BUY_CREDIT_SUCCESS:
		case BUY_CREDIT_FAILURE:
		case BUY_CREDIT_START:
		default:
			return state;
	}
};
