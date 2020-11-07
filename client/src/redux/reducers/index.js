import loginState from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    loginState
})

export default allReducers;