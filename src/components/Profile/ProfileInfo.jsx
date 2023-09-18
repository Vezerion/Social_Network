function ProfileInfo(props) {
    return (
        <div className='profile_wrapper'>
            <div className='profile_photo_wrapper'>
                <div className="profile_photo">
                    <img src={props.avatar} alt="avatar" className="profile_photo_img" />
                </div>
            </div>
            <div className='profile_info'>
                <div className='profile_name'>{props.name}</div>
                <div className='profile_age'>Age: {props.age}</div>
                <div className='profile_descr'>{props.description}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;