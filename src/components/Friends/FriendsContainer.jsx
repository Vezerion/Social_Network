import { setUsersAC, followAC, unfollowAC, changePage, setTotalPages, setPageSize} from '../../redux/users-reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import React from 'react';
import Friends from './Friends'

class FriendsAJAX extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.pageSize}`)
            .then(data => {
                this.props.setUsers(data.data.items);
                this.props.setTotalPages(Math.ceil(data.data.totalCount / this.props.pageSize));
            });
    }
    componentDidUpdate(prevProps) {
        if (this.props.page !== prevProps.page || this.props.pageSize !== prevProps.pageSize) {
            console.log(this.props.page)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.pageSize}`)
                .then(data => {
                    this.props.setUsers(data.data.items);
                    this.props.setTotalPages(Math.ceil(data.data.totalCount / this.props.pageSize));
                });
        }

    }
    render() {
        return <Friends pageSize={this.props.pageSize} page={this.props.page} setPageSize={this.props.setPageSize} changePage={this.props.changePage} totalPages={this.props.totalPages} follow={this.props.follow} unfollow={this.props.unfollow} friends={this.props.friends}/>
    }
}

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

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsAJAX);
export default FriendsContainer;