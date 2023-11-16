import profileReducer, { addPostActionCreator, updateNewPostTextActionCreator, deletePost } from "./profile-reducer";
let state = {
    posts: [
        { id: 0, date: '28.08.23', title: 'Lorem, ipsum.', post: "Hello React!" },
        { id: 1, date: '02.09.23', title: 'React', post: "How does it work?" },
        { id: 2, date: '04.09.23', title: 'Why?', post: "Ok?" },
        { id: 3, date: '24.09.23', title: 'Breaking News', post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptates tempora repellat, molestiae, maiores, corporis beatae aperiam nesciunt perferendis qui ex magnam. Eius nam eum nostrum at ducimus quae quis facere asperiores cum libero dolorem totam repudiandae sint voluptatem quod laborum vero, eaque corporis hic rerum quidem? Error, consectetur veniam!" },
        { id: 4, date: '04.09.23', title: 'Now all data in index.js', post: 'It`s working, but is it truly the way that i should give the data to my components? i dont think so.' }
    ],
    newPostText: ''
}
test('length of posts should be incremented', () => {
    // 1. Test data
    let action = addPostActionCreator();
    let newPostText = updateNewPostTextActionCreator('lol');
    // 2. Action
    let stateWithNewPostText = profileReducer(state, newPostText)
    let newState = profileReducer(stateWithNewPostText, action)

    // 3. Expectation
    expect(newState.posts.length).toBe(6);
    
});

test('new post text should be correct', () => {
    // 1. Test data
    let action = updateNewPostTextActionCreator("message correct");
    // 2. Action

    let newState = profileReducer(state, action);

    // 3. Expectation
    expect(newState.newPostText).toBe("message correct");
})

test('length of posts should be decremented', () => {
    // 1. Test data
    let action = deletePost(1);

    // 2. Action
    let newStata = profileReducer(state, action);

    // 3. Expectation

    expect(newStata.posts.length).toBe(4)
})