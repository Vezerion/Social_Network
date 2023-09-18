import Posts from "./Posts";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'

function PostsContainer(props) {
    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    const getNewPostText = () => {
        return props.store.getState().profilePage.newPostText;
    }
    const updatePosts = (body) => {
        props.store.dispatch(updateNewPostTextActionCreator(body));
    }
    return ( 
        <div>
            <Posts profilePage={props.store.getState().profilePage} addPost={addPost} getNewPostText={getNewPostText} updatePosts={updatePosts}/>
        </div>
    )
}

export default PostsContainer;