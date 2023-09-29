import Friends from './Friends';
import { setUsersAC, followAC, unfollowAC, changePage, setTotalPages, setPageSize} from '../../redux/users-reducer';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        friends: state.friendsPage.users,
        page: state.friendsPage.page,
        pageSize: state.friendsPage.pageSize,
        totalPages: state.friendsPage.totalPages
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
        },
        changePage: (page) => {
            dispatch(changePage(page));
        },
        setTotalPages: (totalPages) => {
            dispatch(setTotalPages(totalPages));
        },
        setPageSize: (pageSize)=> {
            dispatch(setPageSize(pageSize));
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer;