import Post from './Post.jsx'
import { useState } from 'react';
import avatar from '../../../icons/avatar-placeholder.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function Posts(props) {
    const [isShown, setIsShown] = useState(false);
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
        setIsShown(current => !current)
    };
    const onPostAdd = () => {
        props.addPost();
        handleClick();
    }
    const onPostChange = (e) => {
        props.updatePosts(e.target.value);
    }
    const allPosts = props.posts.map(post => {
        return <Post key={post.id} id={`${post.id}`} title={post.title} date={post.date} message={post.post} />
    });
    return (
        <div className="posts">
            <button onClick={handleClick} className="posts_button">Create New Post</button>
            {isShown && (
                <div className='modal'>
                    <div className="modal_wrapper">
                        <div className="modal_avatar">
                            <img src={avatar} alt="avatar" className="modal_avatar_img" />
                        </div>
                        <button onClick={handleClick} className="modal_close">
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <div className="modal_content">
                            <div className="modal_content_username">Lorem ipsum</div>
                            <textarea placeholder='write here' className="modal_content_textarea" onChange={onPostChange} value={props.newPostText} />
                            <div className="modal_content_btns">
                                <button onClick={onPostAdd} className="modal_content_btns_send modal_content_btns_btn">
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                                <button className="modal_content_btns_clear modal_content_btns_btn">
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </button>
                                <button className="modal_content_btns_add modal_content_btns_btn">
                                    <FontAwesomeIcon icon={faPaperclip} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
            <div className="posts_wrapper">
                {
                    allPosts
                }
            </div>
            {/*  */}

        </div>
    )
}

export default Posts;