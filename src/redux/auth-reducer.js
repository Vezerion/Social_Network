const SET_AUTH_USER = 'SET-AUTH-USER';


let initialState = {
    userId: null,    
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}
function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                ...action.data,
                isAuth: true,
                isFetching: true
            }
        default:
            return {
                ...state
            }
    }
}


export function setAuthUserData(login, email, userId) {
    return {
        type: SET_AUTH_USER,
        data: {userId, login, email}
    }
}

export default authReducer;