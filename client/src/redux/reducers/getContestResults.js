const getContestResults = (state = [], action) => {
    switch (action.type) {
        case 'GET_CONTEST_RESULTS':
            return action.payload;
        default:
            return state;
    }
}

export default getContestResults;