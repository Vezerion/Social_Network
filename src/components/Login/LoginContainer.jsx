import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/auth-reducer";
import { setEmail, setPassword, setCheckbox, setCaptcha, reset } from '../../redux/login-reducer'
import Login from "./Login";

class LoginAJAX extends React.Component {
    render() {
        return <Login {...this.props} />
    }
}

function mapStateToProps(state) {
    return {
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth,
        email: state.loginForm.email,
        password: state.loginForm.password,
        checkbox: state.loginForm.checkbox,
        captcha: state.loginForm.captcha,
        isCaptcha: state.auth.isCaptcha,
        captchaSrc: state.auth.captchaSrc
    }
}

export default connect(mapStateToProps, { loginUser, setEmail, setPassword, setCheckbox, setCaptcha, reset }) (LoginAJAX)