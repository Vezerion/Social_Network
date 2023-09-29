import avatar from '../../icons/avatar-placeholder.svg'
function User(props) {
    const follow = (e) => {
        let userid = +e.target.parentElement.id;
        props.follow(userid)
    }
    const unfollow = (e) => {
        let userid = +e.target.parentElement.id;
        props.unfollow(userid)
    }
    return (
        <div id={props.id} className="user">
            <div className="user_photo_wrapper"><img className="user_photo" src={props.photos.small != null ? props.photos.small : avatar} alt="avatar" /></div>
            <div className="user_name">{props.name}</div>
            <div className="user_status">{props.status}</div>
            <button className="user_btn" onClick={props.followed ? unfollow : follow}>
                {props.followed ? 'Unfollow' : 'Follow'}
            </button>
        </div>
    )
}

export default User;