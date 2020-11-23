const recentlyExpContestState = (state = [], action) => {
    switch (action.type) {
        case 'SET_RECENTLY_EXP_CONTESTS_DATA':
            return action.payload;
        default:
            return state;
    }
}

export default recentlyExpContestState;