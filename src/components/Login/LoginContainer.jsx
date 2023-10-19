import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/auth-reducer";
import Login from "./Login";

class LoginAJAX extends React.Component {
    render() {
        return <Login {...this.props} />
    }
}

function mapStateToProps(state) {
    return {
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { loginUser }) (LoginAJAX)