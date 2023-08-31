import ChatPartner from "./ChatPartner";
import avatar from '../icons/avatar-placeholder.svg';
import Message from "./Message";
function Messages() {
    return (
        <div className="messages">
            <div className="messages_chats">
                <ChatPartner name="Lorem Ipsum" avatar={avatar} />
                <ChatPartner name="Myles Mullins" avatar={avatar} />
                <ChatPartner name="Jasper Hatfield" avatar={avatar} />
                <ChatPartner name="Poppy Morton" avatar={avatar} />
                <ChatPartner name="Ivy Harrison" avatar={avatar} />
                <ChatPartner name="Mahdi Keller" avatar={avatar} />
                <ChatPartner name="Riley Alvarado" avatar={avatar} />
                <ChatPartner name="Omari May" avatar={avatar} />
                <ChatPartner name="Wojciech Acevedo" avatar={avatar} />
                <ChatPartner name="Maisey Summers" avatar={avatar} />
                
            </div>
            <div className="messages_chat">
                <div className="messages_chat_wrapper">
                    <Message author="You" text="Hello!" />
                    <Message author="You" text="I hope this chat will be working soon" />
                    <Message author="Maisey Summers" text="Hello!" />
                    <Message author="Maisey Summers" text="i guess it will" />
                    <Message author="Maisey Summers" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad laudantium consectetur molestias rem sint, autem repudiandae nesciunt eligendi ducimus harum dicta, quis, voluptatum eos facere optio aliquam fugit perspiciatis rerum? Dolor maxime corporis hic esse totam repudiandae reprehenderit. Quae pariatur sint reprehenderit illum rerum ducimus impedit quidem fugiat magni quia." />
                    <Message author="Maisey Summers" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad laudantium consectetur molestias rem sint, autem repudiandae nesciunt eligendi ducimus harum dicta, quis, voluptatum eos facere optio aliquam fugit perspiciatis rerum? Dolor maxime corporis hic esse totam repudiandae reprehenderit. Quae pariatur sint reprehenderit illum rerum ducimus impedit quidem fugiat magni quia." />
                    <Message author="Maisey Summers" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad laudantium consectetur molestias rem sint, autem repudiandae nesciunt eligendi ducimus harum dicta, quis, voluptatum eos facere optio aliquam fugit perspiciatis rerum? Dolor maxime corporis hic esse totam repudiandae reprehenderit. Quae pariatur sint reprehenderit illum rerum ducimus impedit quidem fugiat magni quia." />
                    <Message author="Maisey Summers" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad laudantium consectetur molestias rem sint, autem repudiandae nesciunt eligendi ducimus harum dicta, quis, voluptatum eos facere optio aliquam fugit perspiciatis rerum? Dolor maxime corporis hic esse totam repudiandae reprehenderit. Quae pariatur sint reprehenderit illum rerum ducimus impedit quidem fugiat magni quia." />
                </div>
            </div>
        </div>
    )
}

export default Messages;