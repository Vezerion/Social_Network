import { follow, unfollow, changePage, setTotalPages, setPageSize, changeNumberOfLastUser, toggleFollowingProgress, getUsers} from '../../redux/users-reducer';
import { connect } from 'react-redux';
import React from 'react';
import Friends from './Friends'
import Preloader from '../common/preloader/preloader';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { getFriends, getPage, getPageSize, getTotalPages, getTotalUsers, getIsFetching, getNumberOfLastUser, getFollowingProgress } from '../../redux/users-selectors';


class FriendsAJAX extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.page, this.props.pageSize);
    }
    componentDidUpdate(prevProps) {
        if (this.props.page !== prevProps.page || this.props.pageSize !== prevProps.pageSize) {
            if (this.props.pageSize > prevProps.pageSize) {
                this.props.changePage(Math.ceil(this.props.numberOfLastUser / this.props.pageSize));
            }
            this.props.getUsers(this.props.page, this.props.pageSize);
        }

    }
    render() {
        return this.props.isFetching ? <Preloader /> : <Friends pageSize={this.props.pageSize} page={this.props.page} setPageSize={this.props.setPageSize} changePage={this.props.changePage} totalPages={this.props.totalPages} follow={this.props.follow} unfollow={this.props.unfollow} friends={this.props.friends} followingProgress={this.props.followingProgress} toggleFollowingProgress={this.props.toggleFollowingProgress}/>
    }
}

function mapStateToProps(state) {
    return {
        friends: getFriends(state),
        page: getPage(state),
        pageSize: getPageSize(state),
        totalPages: getTotalPages(state),
        totalUsers: getTotalUsers(state),
        isFetching: getIsFetching(state),
        numberOfLastUser: getNumberOfLastUser(state),
        followingProgress: getFollowingProgress(state)
    }
}
export default compose(
    connect(mapStateToProps, {
        unfollow,
        follow,
        changePage,
        setTotalPages,
        setPageSize,
        changeNumberOfLastUser,
        toggleFollowingProgress,
        getUsers,
    }),
    withAuthRedirect
)(FriendsAJAX);