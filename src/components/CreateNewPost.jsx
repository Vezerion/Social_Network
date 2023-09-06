import avatar from '../icons/avatar-placeholder.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { createRef } from 'react';
function CreateNewPost(props) {
    const message = createRef();
    const addPost = () => {
        props.addPost();
        props.close();
    }
    const onPostChange = () => {
        props.updateNewPostText(message.current.value);
    }
    return (
        <div className='modal'>
            <div className="modal_wrapper">
                <div className="modal_avatar">
                    <img src={avatar} alt="avatar" className="modal_avatar_img" />
                </div>
                <button onClick={props.close} className="modal_close">
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <div className="modal_content">
                    <div className="modal_content_username">Lorem ipsum</div>
                    <textarea placeholder='write here' ref={message} name="" id="" cols="30" rows="10" className="modal_content_textarea" value={props.newPostText} onChange={onPostChange}/>
                    <div className="modal_content_btns">
                        <button onClick={addPost} className="modal_content_btns_send modal_content_btns_btn">
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

export default CreateNewPost;