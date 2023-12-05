import { authAPI } from "../api/api";
import { reset } from "./login-reducer";
const SET_AUTH_USER = 'SET-AUTH-USER';
const TOGGLE_FETCHING = 'TOGGLE-FETCHING';
const LOGOUT_USER = 'LOGOUT-USER'
const SET_CAPTCHA_FOR_LOGIN = 'SET-CAPTCHA-FOR-LOGIN'
const CLEAR_CAPTCHA = 'CLEAR-CAPTCHA'

let initialState = {
    userId: null, 
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    isCaptcha: false,
    captchaSrc: ''
}
function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.flag
            }
        case LOGOUT_USER:
            return {
                ...state,
                userId: null, 
                email: null,
                login: null,
                isAuth: false
            }
        case SET_CAPTCHA_FOR_LOGIN: 
            return {
                ...state,
                isCaptcha: true,
                captchaSrc: action.captchaSrc
            }
        case CLEAR_CAPTCHA:
            return {
                ...state,
                isCaptcha: false,
                captchaSrc: ''
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
export function toggleFetching(flag) {
    return {
        type: TOGGLE_FETCHING,
        flag
    }
}

export function logoutAC() {
    return {
        type: LOGOUT_USER
    }
}
export function captchaAC(captchaSrc) {
    return {
        type: SET_CAPTCHA_FOR_LOGIN,
        captchaSrc
    }
}
export function clearCapthca() {
    return {
        type: CLEAR_CAPTCHA
    }
}
// ThunksCreators

export const authUser = () => {
    return async (dispatch) => {
        let response = await authAPI.me()
        if (response.resultCode === 0) {
            let { login, email, id } = response.data;
            dispatch(setAuthUserData(login, email, id));
        }
    }
}
export const loginUser = (data) => {
    return (dispatch) => {
        dispatch(toggleFetching(true));
        authAPI.login(data).then(data => {
            if(data.resultCode === 0) {
                authAPI.me().then(response => {
                    if(response.resultCode === 0) {
                        let {login, email, id} = response.data;
                        dispatch(setAuthUserData(login, email, id));
                        dispatch(clearCapthca());
                        dispatch(reset());
                    }
                })
            }
            if(data.resultCode === 10) {
                console.log('captcha needed');
                authAPI.captcha().then(response => {
                    console.log(response.url);
                    dispatch(captchaAC(response.url));
                })
                dispatch(clearCapthca);
            }
            if(data.resultCode === 1) {
                console.log('error');
                console.log(data);
            }
        });
        dispatch(toggleFetching(false));
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        dispatch(toggleFetching(true));
        authAPI.logout().then(data => {
            if(!data.resultCode) {
                dispatch(logoutAC());
            } else {
                console.log('error');
            }
        })
    }
}
export default authReducer;