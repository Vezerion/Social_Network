import Post from './Post.jsx'
function Posts() {
    return (
        <div className="posts">
            <button className="posts_button">Create New Post</button>
            <div className="posts_wrapper">
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Posts;