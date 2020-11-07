const singleContestState = (state = {}, action) => {
    switch (action.type) {
        case 'GET_BY_ID':
            return action.payload
        default:
            return state;
    }
}

export default singleContestState;