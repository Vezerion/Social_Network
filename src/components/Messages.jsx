import ChatPartner from "./ChatPartner";
import Message from "./Message";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

function Messages(props) {
    return (
        <div className="messages">
            <div className="messages_chats">
                {
                    props.messagesPage.partners.map((item)=>{ 
                        return <ChatPartner key={item.id} id={`${item.id}`} name={item.name} avatar={item.avatar} />
                    })
                }

            </div>
            <div className="messages_chat">
                <div className="messages_chat_wrapper">
                    {
                        props.messagesPage.messages.map((item)=>{
                            return <Message key={item.id} author={item.author} text={item.text} />
                        })
                    }
                </div>
                <div className="messages_chat_textarea_wrapper">
                    <textarea className="messages_chat_textarea" required name="" id="" cols="30" rows="6"></textarea>
                    <div className="messages_chat_btns">
                        <button className="messages_chat_btns_send messages_chat_btns_btn">
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                        <button className="messages_chat_btns_clear messages_chat_btns_btn">
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