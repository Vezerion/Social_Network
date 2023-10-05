import axios from "axios";
import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import {setAuthUserData} from '../../redux/auth-reducer'
class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if(response.data.resultCode === 0) {
                console.log(this.props)
                let {login, email, id} = response.data.data;
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