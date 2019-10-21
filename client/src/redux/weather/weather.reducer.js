import {
	GET_FORECAST_START,
	GET_FORECAST_SUCCESS,
	GET_FORECAST_FAILURE
} from './weather.types';

export default (state = {}, action) => {
	switch (action.type) {
		case GET_FORECAST_SUCCESS:
			return {
				...state,
				forecast: action.payload
			};
		case GET_FORECAST_FAILURE:
		case GET_FORECAST_START:
		default:
			return state;
	}
};
