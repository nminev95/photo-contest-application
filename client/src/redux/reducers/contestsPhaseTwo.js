const contestsPhaseTwoState = (state = [], action) => {
    switch (action.type) {
        case 'SET_CONTESTS_PHASE_TWO_DATA':
            return action.payload;
        default:
            return state;
    }
}

export default contestsPhaseTwoState;