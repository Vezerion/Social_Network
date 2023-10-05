import { setUsers, follow, unfollow, changePage, setTotalPages, setPageSize, toggleIsFetching, setTotalUsersCount, changeNumberOfLastUser } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import React from 'react';
import Friends from './Friends'
import Preloader from '../common/preloader/preloader';

class FriendsAJAX extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(data => {
                this.props.setUsers(data.data.items);
                this.props.setTotalUsersCount(data.data.totalCount);
                this.props.setTotalPages(Math.ceil(data.data.totalCount / this.props.pageSize));
                this.props.changeNumberOfLastUser(this.props.pageSize, this.props.page);
                this.props.toggleIsFetching(false);
            });
    }
    componentDidUpdate(prevProps) {
        if (this.props.page !== prevProps.page || this.props.pageSize !== prevProps.pageSize) {
            if (this.props.pageSize > prevProps.pageSize) {
                this.props.changePage(Math.ceil(this.props.numberOfLastUser / this.props.pageSize));
            }
            this.props.toggleIsFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.pageSize}`, {
                withCredentials: true
            })
                .then(data => {
                    this.props.setUsers(data.data.items);
                    this.props.setTotalUsersCount(data.data.totalCount);
                    this.props.changeNumberOfLastUser(this.props.pageSize, this.props.page);
                    this.props.setTotalPages(Math.ceil(data.data.totalCount / this.props.pageSize));
                    this.props.toggleIsFetching(false);
                });
        }

    }
    render() {
        return this.props.isFetching ? <Preloader /> : <Friends pageSize={this.props.pageSize} page={this.props.page} setPageSize={this.props.setPageSize} changePage={this.props.changePage} totalPages={this.props.totalPages} follow={this.props.follow} unfollow={this.props.unfollow} friends={this.props.friends} />
    }
}

function mapStateToProps(state) {
    return {
        friends: state.friendsPage.users,
        page: state.friendsPage.page,
        pageSize: state.friendsPage.pageSize,
        totalPages: state.friendsPage.totalPages,
        totalUsers: state.friendsPage.totalUsersCount,
        isFetching: state.friendsPage.isFetching,
        numberOfLastUser: state.friendsPage.numberOfTheLastShowenUser
    }
}

const FriendsContainer = connect(mapStateToProps, {
    setUsers,
    unfollow,
    follow,
    changePage,
    setTotalPages,
    setPageSize,
    setTotalUsersCount,
    toggleIsFetching,
    changeNumberOfLastUser
})(FriendsAJAX);
export default FriendsContainer;