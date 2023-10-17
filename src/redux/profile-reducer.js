import { profileAPI } from "../api/api";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const SET_STATUS = 'GET-STATUS'
const SET_NEW_STATUS = 'SET-STATUS'

let initialState = {
    posts: [
        { id: 0, date: '28.08.23', title: 'Lorem, ipsum.', post: "Hello React!" },
        { id: 1, date: '02.09.23', title: 'React', post: "How does it work?" },
        { id: 2, date: '04.09.23', title: 'Why?', post: "Ok?" },
        { id: 3, date: '24.09.23', title: 'Breaking News', post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptates tempora repellat, molestiae, maiores, corporis beatae aperiam nesciunt perferendis qui ex magnam. Eius nam eum nostrum at ducimus quae quis facere asperiores cum libero dolorem totam repudiandae sint voluptatem quod laborum vero, eaque corporis hic rerum quidem? Error, consectetur veniam!" },
        { id: 4, date: '04.09.23', title: 'Now all data in index.js', post: 'It`s working, but is it truly the way that i should give the data to my components? i dont think so.' }
    ],
    newPostText: '',
    profile: null,
    status: '',
    isFetching: false
}
function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText !== '') {
                return {
                    ...state,
                    posts: [...state.posts, { id: 5, date: '06.09.2023', title: 'stupid function', post: state.newPostText }],
                    newPostText: ''
                }
            } else {
                return {
                    ...state
                }
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.data
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.flag
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_NEW_STATUS:
            return {
                ...state,
                status: action.newStatusText
            }
        default:
            return {
                ...state
            }
    }
}

// Action Creators
export function addPostActionCreator() {
    return {
        type: ADD_POST
    }
}
export function updateNewPostTextActionCreator(newText) {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }
}
export function setUserProfileData(data) {
    return {
        type: SET_USER_PROFILE,
        data: data
    }
}
export function setFetching(flag) {
    return {
        type: TOGGLE_IS_FETCHING,
        flag: flag
    }
}
export function setUserStatusInState(status) {
    return {
        type: SET_STATUS,
        status
    }
}
export function setNewUserStatusText(newStatusText) {
    return {
        type: SET_NEW_STATUS,
        newStatusText
    }
}
// Thunk Creators

export const setUserProfile = (id, userId) => {
    return (dispatch) => {
        if(!id){
            id = userId;
        }
        dispatch(setFetching(true));
        profileAPI.getUserProfile(id)
        .then(data => {
            dispatch(setUserProfileData(data));
        });
        profileAPI.getStatus(id).then(data => {
            dispatch(setUserStatusInState(data));
            dispatch(setFetching(false));
        });
    }
}
export const setStatus = (status) => {
    return (dispatch) => {
        dispatch(setFetching(true));
        profileAPI.updateStatus(status).then(data => {
            if(!data.resultCode) {
                console.log('Status setted');
                setUserStatusInState(status);
            } else {
                console.log('Status cant be set now');
            }
            dispatch(setFetching(false));
        });
    }
}

export default profileReducer;