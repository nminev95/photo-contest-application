const userPastContestsState = (state = '', action) => {
    switch (action.type) {
        case 'SET_USER_PAST_CONTESTS_DATA':
            return action.payload;
        default:
            return state;
    }
}

export default userPastContestsState;