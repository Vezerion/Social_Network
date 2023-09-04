import Post from './Post.jsx'
function Posts(props) {
    
    return (
        <div className="posts">
            <button className="posts_button">Create New Post</button>
            <div className="posts_wrapper">
                {props.posts.map(post=> {
                    return <Post key={post.id} id={`${post.id}`} title={post.title} date={post.date} message={post.post}/>
                })}
            </div>
        </div>
    )
}

export default Posts;