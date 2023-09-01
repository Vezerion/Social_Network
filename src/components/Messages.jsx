import ChatPartner from "./ChatPartner";
import avatar from '../icons/avatar-placeholder.svg';
import Message from "./Message";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
let partners = [
    { id: 0, name: "Lorem Ipsum", avatar: avatar },
    { id: 1, name: "Myles Mullins", avatar: avatar },
    { id: 2, name: "Jasper Hatfield", avatar: avatar },
    { id: 3, name: "Poppy Morton", avatar: avatar },
    { id: 4, name: "Ivy Harrison", avatar: avatar },
    { id: 5, name: "Mahdi Keller", avatar: avatar },
    { id: 6, name: "Riley Alvarado", avatar: avatar },
    { id: 7, name: "Omari May", avatar: avatar },
    { id: 8, name: "Wojciech Acevedo", avatar: avatar },
    { id: 9, name: "Maisey Summers", avatar: avatar },
];

let messages = [
    {id: 0, author: "You", text: "Hello!"},
    {id: 1, author: "You", text: "I hope this chat will be working soon"},
    {id: 2, author: "Maisey Summers", text: "Hello!"},
    {id: 3, author: "Maisey Summers", text: "i guess it will"},
    {id: 4, author: "Maisey Summers", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad laudantium consectetur molestias rem sint, autem repudiandae nesciunt eligendi ducimus harum dicta, quis, voluptatum eos facere optio aliquam fugit perspiciatis rerum? Dolor maxime corporis hic esse totam repudiandae reprehenderit. Quae pariatur sint reprehenderit illum rerum ducimus impedit quidem fugiat magni quia."},
    {id: 5, author: "You", text: "i dont speak ancient Greek"},
    {id: 6, author: "You", text: "Can you speak English?"},
    {id: 7, author: "Maisey Summers", text: "Oh, Sorry"}
    
];
function Messages(props) {
    return (
        <div className="messages">
            <div className="messages_chats">
                {
                    partners.map((item)=>{
                        return <ChatPartner key={item.id} id={`${item.id}`} name={item.name} avatar={item.avatar} />
                    })
                }

            </div>
            <div className="messages_chat">
                <div className="messages_chat_wrapper">
                    {
                        messages.map((item)=>{
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