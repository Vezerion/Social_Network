import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile'
import { setUserProfile } from '../../redux/profile-reducer'
import { useParams } from 'react-router-dom';

function WrappedComponent(props) {
    let id = useParams();
    return (
        <ProfileAJAX {...props} id={id}/>
    )
}

class ProfileAJAX extends React.Component {
    componentDidMount() {
        if(this.props.isAuth) {
            this.props.setUserProfile(this.props.id.userId, this.props.userId);
        }  
    }
    
    componentDidUpdate(prevProps) {
        if(this.props.isAuth && this.props.userId !== prevProps.userId) {
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
        userId: state.auth.userId,
        isAuth: state.auth.isAuth,
        isFetching: state.profilePage.isFetching
    }
}
const ProfileContainer = connect(mapStateToProps, {
    setUserProfile
})(WrappedComponent)
export default ProfileContainer;

