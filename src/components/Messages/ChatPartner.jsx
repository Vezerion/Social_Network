import { NavLink } from "react-router-dom";

function ChatPartner(props) {
    return (
        <NavLink to={props.id} className="chat_partner">
            <div className="chat_partner_avatar">
                <img src={props.avatar} alt="avatar" className="chat_partner_avatar_img" />
            </div>
            <div className="chat_partner_name">
                {props.name}
            </div>
        </NavLink>
    )
}

export default ChatPartner;