const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
        posts: [
            { id: 0, date: '28.08.23', title: 'Lorem, ipsum.', post: "Hello React!" },
            { id: 1, date: '02.09.23', title: 'React', post: "How does it work?" },
            { id: 2, date: '04.09.23', title: 'Why?', post: "Ok?" },
            { id: 3, date: '24.09.23', title: 'Breaking News', post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptates tempora repellat, molestiae, maiores, corporis beatae aperiam nesciunt perferendis qui ex magnam. Eius nam eum nostrum at ducimus quae quis facere asperiores cum libero dolorem totam repudiandae sint voluptatem quod laborum vero, eaque corporis hic rerum quidem? Error, consectetur veniam!" },
            { id: 4, date: '04.09.23', title: 'Now all data in index.js', post: 'It`s working, but is it truly the way that i should give the data to my components? i dont think so.' }
        ],
        newPostText: ''
}
function profileReducer(state = initialState, action) {
    // debugger;
    // state = initialState;
    // console.log(state);
    // console.log(action);
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

export default profileReducer;