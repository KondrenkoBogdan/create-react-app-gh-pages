import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


export const withRedirectToUserPage = (Component) => {

    const RedirectComponent = (props) => {
           if(props.isAuth === true) return <Redirect to="/user" {...props} />;
           return <Component {...props} />
    }

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
  
const ConnectRedirectComponent = connect(mapStateToProps,{})(RedirectComponent)

    return ConnectRedirectComponent
}