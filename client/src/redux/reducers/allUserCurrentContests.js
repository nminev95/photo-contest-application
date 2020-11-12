const userCurrentContestState = (state = null, action) => {
    switch (action.type) {
        case 'SET_USER_CURRENT_CONTESTS_DATA':
            return action.payload;
        default:
            return state;
    }
}

export default userCurrentContestState;