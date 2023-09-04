import logo from '../icons/logo.png'
// import placeholder from '../icons/placeholder.png'
function Post(props) {
    return (
        <div className="post 1">
            <div className="post_photo_wrapper">
                <img alt="" src={logo} className="post_photo_img" />
            </div>
            <div className='post_title'>{props.title}</div>
            <div className='post_date'>{props.date}</div>
            <div className='post_text'>{props.message}</div>
            {/* <div className='post_picture'>
                <img alt='' src={placeholder} className='post_picture_img' />
            </div> */}
        </div>
    )
}

export default Post;