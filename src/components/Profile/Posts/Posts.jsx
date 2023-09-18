import Post from './Post.jsx'
import { useState } from 'react';
import CreateNewPost from './CreateNewPost.jsx'
function Posts(props) {
    const [isShown, setIsShown] = useState(false);
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
        setIsShown(current => !current)
    };
    const allPosts = props.profilePage.posts.map(post => {
        return <Post key={post.id} id={`${post.id}`} title={post.title} date={post.date} message={post.post} />
    });
    return (
        <div className="posts">
            <button onClick={handleClick} className="posts_button">Create New Post</button>
            {isShown && (
                <CreateNewPost close={handleClick} addPost={props.addPost} getNewPostText={props.getNewPostText} updatePosts={props.updatePosts}/>
            )
            }
            <div className="posts_wrapper">
                {
                    allPosts
                }
            </div>
        </div>
    )
}

export default Posts;