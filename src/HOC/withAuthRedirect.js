import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";



export const withAuthRedirect = (Component) => {

    const RedirectComponent = (props) => {
            if(props.isAuth === false) return <Redirect to="/login" />
            return <Component {...props} />
    }

    let mapStateToProps = (state) => {
        return{
            isAuth: state.auth.isAuth
        }
    }

    const ConnectRedirectComponent = connect(mapStateToProps,{})(RedirectComponent)

    return ConnectRedirectComponent
}