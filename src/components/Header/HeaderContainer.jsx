import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import { authUser, logoutUser } from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authUser();
    }
   render() {
    return (
        <Header {...this.props}/>
    )
   }
}

function mapStateToProps(state) {
    return {
        login: state.auth.login,
        email: state.auth.email,
        userId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {authUser, logoutUser}) (HeaderContainer);