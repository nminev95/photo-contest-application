const initialState = {
    isLogged: false,
    user: null,
}

const loginState = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                isLogged: true,
                user: action.payload
            };
        case 'SING_OUT':
            return false;
        default:
            return state;
    }
}

export default loginState;