import logo from '../icons/logo.png'
import placeholder from '../icons/placeholder.png'
function Post() {
    return (
        <div className="post 1">
            <div className="post_photo_wrapper">
                <img alt="" src={logo} className="post_photo_img" />
            </div>
            <div className='post_title'>Lorem, ipsum.</div>
            <div className='post_date'>28.10.2023</div>
            <div className='post_text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero recusandae corporis explicabo. Natus voluptas saepe maxime, nostrum cumque reiciendis reprehenderit dignissimos delectus earum magnam ea nulla voluptatum! Enim, laudantium facere.</div>
            <div className='post_picture'>
                <img alt='' src={placeholder} className='post_picture_img' />
            </div>
        </div>
    )
}

export default Post;