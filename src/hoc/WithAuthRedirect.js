import { Navigate } from "react-router-dom"
import React from 'react';
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth
    }
}
export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to='/login' />
            return <Component {...this.props} />
        }
    }
    const withAuthRedirectConnected = connect(mapStateToProps, {}) (RedirectComponent);
    return withAuthRedirectConnected;
}


