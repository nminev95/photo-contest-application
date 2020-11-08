import loginState from './isLogged';
import singleContestState from './singleContest';
import allContestState from './allContests'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    loginState,
    singleContestState,
    allContestState,
})

export default allReducers;