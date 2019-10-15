import axios from 'axios';
import { FETCH_USER } from './user.types';

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/auth/current-user');
	dispatch({
		type: FETCH_USER,
		payload: res.data
	});
};

export const processUserPayment = token => async dispatch => {
	const res = await axios.post('api/billing/stripe', token);
	dispatch({
		type: FETCH_USER,
		payload: res.data
	});
};
