import { FETCH_USER, LOG_IN_USER, LOG_OUT_USER } from './user.types';

export default (state = null, action) => {
	switch (action.type) {
		case FETCH_USER:
			return action.payload || false;
		case LOG_IN_USER:
		case LOG_OUT_USER:
		default:
			return state;
	}
};
