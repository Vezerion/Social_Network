function Message(props) {
    return (
        <div className="message">
            <div className="message_text">
                {props.text}
            </div>
            <div className="message_author"><span className="message_author_from">from</span>  {props.author}</div>
            
        </div>
    )
}

export default Message;