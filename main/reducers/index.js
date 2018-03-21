import login from './Login';
import user from './Home';
import planets from './Planets';
import {combineReducers} from 'redux';

const reducer=combineReducers({
	login:login,
	user:user,
	planets:planets
});
export default reducer;