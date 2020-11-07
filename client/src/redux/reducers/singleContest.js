const singleContestState = (state = {}, action) => {
    switch (action.type) {
        case 'GET_BY_ID':
            return action.payload;
        case 'SET_NEXT_PHASE':
            return {
                ...action.payload,
                phase_id: action.payload.phase_id + 1
            }
        default:
            return state;
    }
}

export default singleContestState;