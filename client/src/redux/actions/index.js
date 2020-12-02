import { notification } from "antd";

export const login = (userInfo) => {
    return {
        type: 'SIGN_IN',
        payload: userInfo
    };
};

export const logout = () => {
    return {
        type: 'SIGN_OUT'
    }
};

export const setContestDetails = (contestInfo) => {
    return {
        type: 'GET_BY_ID',
        payload: contestInfo
    };
};

export const setNextContestPhase = (contestInfo) => {
    return {
        type: 'SET_NEXT_PHASE',
        payload: contestInfo
    }
};

export const setAllContestsData = (allContestsInfo) => {
    return {
        type: 'SET_ALL_CONTESTS_DATA',
        payload: allContestsInfo
    };
};

export const setUserData = (userInfo) => {
    return {
        type: 'SET_USER_DATA',
        payload: userInfo
    };
};

export const setUserCurrentContestsData = (userCurrentContestInfo) => {
    return {
        type: 'SET_USER_CURRENT_CONTESTS_DATA',
        payload: userCurrentContestInfo
    };
};

export const setUserPastContestsData = (userPastContestsInfo) => {
    return {
        type: 'SET_USER_PAST_CONTESTS_DATA',
        payload: userPastContestsInfo
    };
};

export const setTopRatedPhotosData = (allTopRatedPhotosInfo) => {
    return {
        type: 'SET_ALL_TOP_RATED_PHOTOS_DATA',
        payload: allTopRatedPhotosInfo
    };
};

export const setRecentlyExpContestsData = (recentlyExpContestsInfo) => {
    return {
        type: 'SET_RECENTLY_EXP_CONTESTS_DATA',
        payload: recentlyExpContestsInfo
    };
};

export const setUsersRankingsData = (usersRankingsInfo) => {
    return {
        type: 'SET_USERS_RANKINGS_DATA',
        payload: usersRankingsInfo
    };
};

export const setContestResults = (contestResults) => {
    return {
        type: 'GET_CONTEST_RESULTS',
        payload: contestResults
    }
}

export const setContestPhaseTwoData = (contestPhaseTwoResults) => {
    return {
        type: 'SET_CONTESTS_PHASE_TWO_DATA',
        payload: contestPhaseTwoResults
    }
}

export const setFinishedContestsData = (finishedContestsResults) => {
    return {
        type: 'SET_FINISHED_CONTESTS_DATA',
        payload: finishedContestsResults
    }
}

export const setNotifications = (notifications) => {
    return {
        type: 'SET_NOTIFICATIONS',
        payload: notifications,
    }
}

export const setUsers = (users) => {
    return {
        type: 'GET_ALL_USERS',
        payload: users,
    }
} 

export const setPrivateContests = (contests) => {
    return {
        type: 'SET_PRIVATE_CONTESTS',
        payload: contests,
    }
}