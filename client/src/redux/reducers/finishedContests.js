const finishedContestsState = (state = [], action) => {
    switch (action.type) {
        case 'SET_FINISHED_CONTESTS_DATA':
            return action.payload;
        default:
            return state;
    }
}

export default finishedContestsState;