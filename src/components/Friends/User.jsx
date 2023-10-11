import avatar from '../../icons/avatar-placeholder.svg'
import { NavLink } from 'react-router-dom'
function User(props) {
    const follow = () => {
        props.follow(props.id);
    }
    const unfollow = () => {
        props.unfollow(props.id);
    }
    return (
        <div id={props.id} className="user">

            <div className="user_photo_wrapper">
                <NavLink to={`/profile/${props.id}`}>
                    <img className="user_photo" src={props.photos.small != null ? props.photos.small : avatar} alt="avatar" />
                </NavLink>
            </div>
            
            <div className="user_name">{props.name}</div>
            <div className="user_status">{props.status}</div>
            <button className="user_btn" disabled={props.followingProgress.some(id => id === props.id)} onClick={props.followed ? unfollow : follow}>
                {props.followed ? 'Unfollow' : 'Follow'}
            </button>
        </div>
    )
}

export default User;