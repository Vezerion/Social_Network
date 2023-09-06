import Post from './Post.jsx'
import {useState} from 'react';
import CreateNewPost from './CreateNewPost.jsx'
function Posts(props) {
    const [isShown, setIsShown] = useState(false);
    const handleClick = (e) => {
        setIsShown(current => !current)
    };
    return (
        <div className="posts">
            <button onClick={handleClick} className="posts_button">Create New Post</button>
            {isShown && (
                <CreateNewPost close={handleClick}/>
            )}
            <div className="posts_wrapper">
                {props.posts.map(post=> {
                    return <Post key={post.id} id={`${post.id}`} title={post.title} date={post.date} message={post.post}/>
                })}
            </div>
        </div>
    )
}

export default Posts;