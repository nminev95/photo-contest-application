import allTopRatedPhotosState from './allTopRatedPhotosByContest';
import userCurrentContestState from './allUserCurrentContests';
import recentlyExpContestState from './recentlyExpContests';
import userPastContestsState from './allUserPastContests';
import  contestsPhaseTwoState from './contestsPhaseTwo';
import contestResultsState from './contestResults';
import finishedContestsState from './finishedContests';
import singleContestState from './singleContest';
import usersRankingsState from './usersRankings';
import allContestState from './allContests';
import { combineReducers } from 'redux';
import loginState from './isLogged';
import userState from './userInfo';

const allReducers = combineReducers({
    userCurrentContestState,
    recentlyExpContestState,
    allTopRatedPhotosState,
    userPastContestsState,
    contestsPhaseTwoState,
    contestResultsState,
    singleContestState,
    usersRankingsState,
    finishedContestsState,
    allContestState,
    loginState,
    userState,
})

export default allReducers;