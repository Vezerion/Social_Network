import Friends from './Friends';
import { setUsersAC, followAC, unfollowAC} from '../../redux/users-reducer';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        friends: state.friendsPage.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },
        follow: (userID) => {
            dispatch(followAC(userID));
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer;