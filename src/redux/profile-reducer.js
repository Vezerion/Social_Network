const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const GET_NEW_POST_TEXT = 'GET-NEW-POST-TEXT';
const GET_POSTS = 'GET-POSTS'


function profileReducer(action, state) {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText !== '') {
                const newPost = {
                    id: 5,
                    date: '06.09.2023',
                    title: 'stupid function',
                    post: state.newPostText
                }
                state.posts.push(newPost);
                state.newPostText = '';
                return state;
            }
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        case GET_NEW_POST_TEXT:
            //Не могу возвращать что то кроме state нужна другая логика  или еще что то придумать 
            return state;
        case GET_POSTS:
            return state;
        default:
            return state;
    }
}


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
export function getNewPostTextActionCreator() {
    return {
        type: GET_NEW_POST_TEXT
    }
}

export function getPostsActionCreator() {
    return {
        type: GET_POSTS
    }
}

export default profileReducer;