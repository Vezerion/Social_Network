import axios from 'axios';
import avatar from '../../icons/avatar-placeholder.svg'
import { NavLink } from 'react-router-dom'
function User(props) {
    const follow = (e) => {
        let userid = +e.target.parentElement.id;
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userid}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": "94040af5-bef1-40a6-99dd-b81e9618fdbc"
            }
        })
        .then( response => {
            if(response.data.resultCode === 0) {
                props.follow(userid)
            }
        });
        
    }
    const unfollow = (e) => {
        let userid = +e.target.parentElement.id;
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userid}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "94040af5-bef1-40a6-99dd-b81e9618fdbc"
            }
        })
        .then( response => {
            if(response.data.resultCode === 0) {
                props.unfollow(userid)
            }
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
            <button className="user_btn" onClick={props.followed ? unfollow : follow}>
                {props.followed ? 'Unfollow' : 'Follow'}
            </button>
        </div>
    )
}

export default User;