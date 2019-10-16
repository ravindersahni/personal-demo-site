import axios from 'axios';
import { FETCH_USER, LOG_IN_USER, LOG_OUT_USER } from './user.types';

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

export const logInUser = () => {
	window.open('/auth/google', '_top');
	return {
		type: LOG_IN_USER
	};
};

export const logOutUser = () => {
	window.open('/auth/logout', '_self');
	return {
		type: LOG_OUT_USER
	};
};
