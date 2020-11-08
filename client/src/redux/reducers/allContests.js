const allContestState = (state = null, action) => {
    switch (action.type) {
        case 'SET_ALL_CONTESTS_DATA':
            return action.payload;
        default:
            return state;
    }
}

export default allContestState;