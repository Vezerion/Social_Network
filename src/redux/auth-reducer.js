import { authAPI } from "../api/api";
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
                isAuth: true
            }
        default:
            return {
                ...state
            }
    }
}

// Action Creators
export function setAuthUserData(login, email, userId) {
    return {
        type: SET_AUTH_USER,
        data: {userId, login, email}
    }
}
// ThunksCreators

export const authUser = () => {
    return (dispatch) => {
        authAPI.me().then(response => {
            if(response.resultCode === 0) {
                let {login, email, id} = response.data;
                dispatch(setAuthUserData(login, email, id));
            }
        })
    }
}

export default authReducer;