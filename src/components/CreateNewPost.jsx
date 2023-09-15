import avatar from '../icons/avatar-placeholder.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../redux/profile-reducer'
function CreateNewPost(props) {
    
    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
        props.close();
    }
    const onPostChange = (e) => {
        console.log(e.target.value);
        
        props.store.dispatch(updateNewPostTextActionCreator(e.target.value));
        console.log(props.store.getState().profilePage.newPostText);
    }
    const getNewPostText = () => {
        return props.store.getState().profilePage.newPostText;
    }
    // Передавать в value у textarea props.dispatch(getNewPostTextActionCreator()); категорически запрещено тк в dispatch вызывается функция рендер из за чего компонента ререндерится и функция dispatch вызывается по новой и получается рекурсия рендера приложение и оно подыхает.
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
                    <textarea placeholder='write here' className="modal_content_textarea"  onChange={onPostChange} value={getNewPostText()}/>
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