import axios from 'axios';
import { FETCH_USER } from './user.types';

const fetchUser = () => {
	axios.get('/auth/current-user');
	return {
		type: FETCH_USER,
		payload: null
	};
};
