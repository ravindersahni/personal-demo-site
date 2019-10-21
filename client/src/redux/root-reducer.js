import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import creditReducer from './credit/credit.reducer';
import koanReducer from './koan/koan.reducer';
import weatherReducer from './weather/weather.reducer';

export default combineReducers({
	user: userReducer,
	credit: creditReducer,
	koans: koanReducer,
	weather: weatherReducer
});
