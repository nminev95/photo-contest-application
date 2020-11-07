import loginState from './isLogged';
import singleContestState from './singleContest';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    loginState,
    singleContestState
})

export default allReducers;