const usersRankingsState = (state = [], action) => {
    switch (action.type) {
        case 'SET_USERS_RANKINGS_DATA':
            return action.payload;
        default:
            return state;
    }
}

export default usersRankingsState;