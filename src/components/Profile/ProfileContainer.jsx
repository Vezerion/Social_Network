import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile'
import { setUserProfile, setNewUserStatusText, setStatus } from '../../redux/profile-reducer'
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect'
import { compose } from 'redux';

function WrappedComponent(props) {
    let id = useParams();
    return (
        <ProfileAJAX {...props} id={id} />
    )
}

class ProfileAJAX extends React.Component {
    componentDidMount() {
        if (this.props.isAuth) {
            this.props.setUserProfile(this.props.id.userId, this.props.userId);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.isAuth && this.props.id.userId !== prevProps.id.userId) {
            this.props.setUserProfile(this.props.id.userId, this.props.userId);
        }
    }
    render() {
        return <Profile {...this.props} />

    }
}

function mapStateToProps(state) {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.userId,
        isAuth: state.auth.isAuth,
        isFetching: state.profilePage.isFetching,
        newStatus: state.profilePage.newStatus
    }
}

export default compose(
    connect(mapStateToProps, {
        setUserProfile, setNewUserStatusText, setStatus
    }),
    withAuthRedirect
)(WrappedComponent);

