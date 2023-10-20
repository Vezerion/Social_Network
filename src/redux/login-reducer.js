const SET_EMAIL = 'SET-EMAIL';
const SET_PASSWORD = 'SET-PASSWORD';
const SET_CHEKCBOX = 'SET-CHEKCBOX';
const SET_CAPTCHA = 'SET-CAPTCHA';
const RESET = 'RESET';

let initialState = {
    email: '',
    password: '',
    checkbox: false,
    captcha: ''
}
function loginReducer(state = initialState, action) {
    switch (action.type) {
        case SET_EMAIL:
            return {
                ...state,
                email: action.text
            }
        case SET_PASSWORD:
            return {
                ...state,
                password: action.text
            }
        case SET_CHEKCBOX:
            return {
                ...state,
                checkbox: action.flag
            }
        case SET_CAPTCHA:
            return {
                ...state,
                captcha: action.text
            }
        case RESET:
            return {
                ...state,
                email: '',
                password: '',
                checkbox: false,
                captcha: ''
            }
        default:
            return {
                ...state
            }
    }
}

// Action Creators
export function setEmail(text) {
    return {
        type: SET_EMAIL,
        text
    }
}
export function setPassword(text) {
    return {
        type: SET_PASSWORD,
        text
    }
}

export function setCheckbox(flag) {
    return {
        type: SET_CHEKCBOX,
        flag
    }
}
export function setCaptcha(text) {
    return {
        type: SET_CAPTCHA,
        text
    }
}
export function reset() {
    return {
        type: RESET
    }
}
// ThunksCreators

export default loginReducer;