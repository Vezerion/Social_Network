import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile'
import { setUserProfile } from '../../redux/profile-reducer'
import { useParams } from 'react-router-dom';


function WrappedComponent(props) {
    let id = useParams();
    // console.log(id)
    return (
        <ProfileAJAX {...props} id={id}/>
    )
}

class ProfileAJAX extends React.Component {
    componentDidMount() {
        if(this.props.isAuth) {
            if(!this.props.id.userId){
                this.props.id.userId = this.props.user;
            }
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.id.userId}`)
            .then(data => {
                this.props.setUserProfile(data.data);
            });
        }  
    }
    
    componentDidUpdate(prevProps) {
        if(this.props.isAuth && this.props.user !== prevProps.user) {
            if(!this.props.id.userId){
                this.props.id.userId = this.props.user;
            }
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.id.userId}`)
            .then(data => {
                this.props.setUserProfile(data.data);
            });
        }   
    }
    render() {
        return <Profile {...this.props} />
        
    }
}

function mapStateToProps(state) {
    return {
        profile: state.profilePage.profile,
        user: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}
const ProfileContainer = connect(mapStateToProps, {
    setUserProfile
})(WrappedComponent)
export default ProfileContainer;

