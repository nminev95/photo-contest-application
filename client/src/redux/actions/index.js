export const login = (userInfo) => {
    return {
        type: 'SIGN_IN',
        payload: userInfo
    };
};

export const setContestDetails = (contestInfo) => {
    return {
        type: 'GET_BY_ID',
        payload: contestInfo
    };
}

export const setNextContestPhase = (contestInfo) => {
    return {
        type: 'SET_NEXT_PHASE',
        payload: contestInfo
    }
}

export const setAllContestsData = (allContestsInfo) => {
    return {
        type: 'SET_ALL_CONTESTS_DATA',
        payload: allContestsInfo
    };
}