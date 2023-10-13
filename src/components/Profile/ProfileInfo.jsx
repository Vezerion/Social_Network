import avatar from '../../icons/avatar-placeholder.svg';
import ProfileStatus from './ProfileStatus';
function ProfileInfo(props) {

    return (
        <div className='profile_wrapper'>
            <div className='profile_photo_wrapper'>
                <div className="profile_photo">
                    <img src={props.profile.photos.small != null ? props.profile.photos.small : avatar} alt="avatar" className="profile_photo_img" />
                </div>
            </div>
            <div className='profile_info'>
                <div className='profile_name'>{props.profile.fullName}</div>
                <div className='profile_age'>{props.profile.lookingForAJob ? 'Не ищу работу' : 'Ищу работу'}</div>
                <ProfileStatus status={'Its testing status'}/>
                <div className='profile_descr'>{props.profile.aboutMe}</div>
            </div>
        </div>
    )
}
export default ProfileInfo;