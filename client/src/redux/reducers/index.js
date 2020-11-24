import allTopRatedPhotosState from './allTopRatedPhotosByContest';
import userCurrentContestState from './allUserCurrentContests';
import recentlyExpContestState from './recentlyExpContests';
import userPastContestsState from './allUserPastContests';
import singleContestState from './singleContest';
import usersRankingsState from './usersRankings';
import allContestState from './allContests';
import loginState from './isLogged';
import userState from './userInfo';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    userCurrentContestState,
    recentlyExpContestState,
    userPastContestsState,
    allTopRatedPhotosState,
    singleContestState,
    usersRankingsState,
    allContestState,
    loginState,
    userState,
})

export default allReducers;