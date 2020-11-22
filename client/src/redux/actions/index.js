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