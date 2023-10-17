import ProfileInfo from './ProfileInfo';
import PostsContainer from './Posts/PostsContainer';
import Preloader from '../common/preloader/preloader';
function Profile(props) {
    if (props.isFetching || !props.profile) {
        return <Preloader/>
    } else {
        return (
            <div className="profile">
                <ProfileInfo profile={props.profile} authUserId = {props.userId} status={props.status} setNewUserStatusText={props.setNewUserStatusText} setStatus={props.setStatus}/>
                <PostsContainer />
            </div>
    
        )
    }
    
}
export default Profile;