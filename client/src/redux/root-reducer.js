import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import creditReducer from './credit/credit.reducer';

export default combineReducers({
	user: userReducer,
	credit: creditReducer
});
