import Posts from "./Posts";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import { connect } from "react-redux";


function mapStateToProps(state) {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updatePosts: (body) => {
            dispatch(updateNewPostTextActionCreator(body));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;