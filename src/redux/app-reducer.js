import { authUser } from "./auth-reducer"

const SET_INITIALIZED = "SET-INITIALIZED"

const initialState = {
    initialized: false
}

function appReducer(state = initialState, action) {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return {
                ...state
            }
    }
}

export const initializedSucces = () => {
    return {
        type: SET_INITIALIZED
    }
}

export const initializeApp = () => {
    return (dispatch) => {
        let result = dispatch(authUser());
        Promise.all([result]).then(()=>{
            dispatch(initializedSucces());
        }) 
    }
}

export default appReducer;