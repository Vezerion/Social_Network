import Post from './Post.jsx'
function Posts() {
    return (
        <div className="posts">
            <button className="posts_button">Create New Post</button>
            <div className="posts_wrapper">
                <Post message="Hello React!" />
                <Post message="How does it work?" />
                <Post message="Ok?" />
                <Post message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptates tempora repellat, molestiae, maiores, corporis beatae aperiam nesciunt perferendis qui ex magnam. Eius nam eum nostrum at ducimus quae quis facere asperiores cum libero dolorem totam repudiandae sint voluptatem quod laborum vero, eaque corporis hic rerum quidem? Error, consectetur veniam!" /> 
            </div>
        </div>
    )
}

export default Posts;