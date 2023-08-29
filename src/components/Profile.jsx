import avatar from '../icons/avatar-placeholder.svg'
import Posts from './Posts'
function Profile() {
    return (
        <div className="profile">
            <div className='profile_wrapper'>
                <div className='profile_photo_wrapper'>
                    <div className="profile_photo">
                        <img src={avatar} alt="avatar" className="profile_photo_img" />
                    </div>
                </div>
                <div className='profile_info'>
                    <div className='profile_name'>Lorem  ipsum</div>
                    <div className='profile_age'>Age: 25</div>
                    <div className='profile_descr'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, accusantium facere expedita animi ex sed impedit numquam delectus nostrum consequatur temporibus, facilis illo, fugit quidem provident assumenda cupiditate architecto sit.</div>
                </div>
            </div>
            <Posts />
        </div>

    );
}
export default Profile;