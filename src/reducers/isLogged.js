// all user reducers goes here
const isLoggedReducer = (state = false, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return state = true;
            
        case 'SIGN_OUT':
            return state = false;

        default:
            return state;
    }
}

export default isLoggedReducer;