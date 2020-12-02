const privateContestsState = (state = [], action) => {
    switch (action.type) {
        case 'SET_PRIVATE_CONTESTS':
            return action.payload;
        default:
            return state;
    }
}

export default privateContestsState;