import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import {setAuthUserData} from '../../redux/auth-reducer'
import { UsersAPI } from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        UsersAPI.isAuth().then(response => {
            if(response.resultCode === 0) {
                console.log(this.props)
                let {login, email, id} = response.data;
                this.props.setAuthUserData(login, email, id);
            }
        })
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

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);