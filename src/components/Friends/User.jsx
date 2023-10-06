import avatar from '../../icons/avatar-placeholder.svg'
import { NavLink } from 'react-router-dom'
import { UsersAPI } from '../../api/api';
function User(props) {
    console.log(props.followingProgress);
    const follow = () => {
        props.toggleFollowingProgress(true, props.id);
        UsersAPI.followUser(props.id)
            .then(response => {
                if (response.resultCode === 0) {
                    props.follow(props.id)
                }
                props.toggleFollowingProgress(false, props.id);
            });

    }
    const unfollow = () => {
        props.toggleFollowingProgress(true, props.id);
        UsersAPI.unfollowUser(props.id)
            .then(response => {
                if (response.resultCode === 0) {
                    props.unfollow(props.id)
                }
                props.toggleFollowingProgress(false, props.id);
            });
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