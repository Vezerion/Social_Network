function ChatPartner(props) {
    return (
        <div className="chat_partner">
            <div className="chat_partner_avatar">
                <img src={props.avatar} alt="avatar" className="chat_partner_avatar_img" />
            </div>
            <div className="chat_partner_name">
                {props.name}
            </div>
        </div>
    )
}

export default ChatPartner;