import userCurrentContestState from './allUserCurrentContests'
import singleContestState from './singleContest';
import allContestState from './allContests'
import loginState from './isLogged';
import userState from './userInfo'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    loginState,
    singleContestState,
    allContestState,
    userState,
    userCurrentContestState,
})

export default allReducers;