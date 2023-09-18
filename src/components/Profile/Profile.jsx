import avatar from '../../icons/avatar-placeholder.svg';
import ProfileInfo from './ProfileInfo';
import PostsContainer from './Posts/PostsContainer';
function Profile(props) {
    return (
        <div className="profile">
            <ProfileInfo name="Lorem  ipsum" avatar={avatar} age="22" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, accusantium facere expedita animi ex sed impedit numquam delectus nostrum consequatur temporibus, facilis illo, fugit quidem provident assumenda cupiditate architecto sit."/>
            <PostsContainer store={props.store}/>
        </div>

    );
}
export default Profile;