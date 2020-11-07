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
