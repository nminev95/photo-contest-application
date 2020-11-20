const allTopRatedPhotosState = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL_TOP_RATED_PHOTOS_DATA':
            return action.payload;
        default:
            return state;
    }
}

export default allTopRatedPhotosState;