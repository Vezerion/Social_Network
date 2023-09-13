import ChatPartner from "./ChatPartner";
import Message from "./Message";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { createRef } from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../redux/messages-reducer'
function Messages(props) {
    const messageArea = createRef();
    const addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };
    const onMessageChange = () => {
        props.dispatch(updateNewMessageTextActionCreator(messageArea.current.value));
    }
    const clearText = () => {
        props.store.clearMessageText();
    }
    return (
        <div className="messages">
            <div className="messages_chats">
                {
                    props.store.getPartners().map((item) => {
                        return <ChatPartner key={item.id} id={`${item.id}`} name={item.name} avatar={item.avatar} />
                    })
                }

            </div>
            <div className="messages_chat">
                <div className="messages_chat_wrapper">
                    {
                        props.store.getMessages().map((item) => {
                            return <Message key={item.id} author={item.author} text={item.text} />
                        })
                    }
                </div>
                <div className="messages_chat_textarea_wrapper">
                    <textarea ref={messageArea} className="messages_chat_textarea" required name="" id="" cols="30" onChange={onMessageChange} value={props.store.getNewMessageText()} rows="6"/>
                    <div className="messages_chat_btns">
                        <button onClick={addMessage} className="messages_chat_btns_send messages_chat_btns_btn">
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                        <button onClick={clearText} className="messages_chat_btns_clear messages_chat_btns_btn">
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                        <button className="messages_chat_btns_clip messages_chat_btns_btn">
                            <FontAwesomeIcon icon={faPaperclip} />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Messages;