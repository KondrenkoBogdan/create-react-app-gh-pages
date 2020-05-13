import Header from "./header";
import { connect } from "react-redux";
import {logOutThunkCreator, authFThunkCreator, setAuthUserDataActionCreator, toggleIsFetchingActionCreator, setAuthStatusActionCreator } from "../../redux/auth-reducer";
import { compose } from "redux"

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        id: state.auth.id,
        isAuth: state.auth.isAuth
    }
}


export default compose(
    connect(mapStateToProps, {
        authFThunkCreator,
        toggleIsfatching: toggleIsFetchingActionCreator,
        setUserData: setAuthUserDataActionCreator,
        setIsAuth: setAuthStatusActionCreator,
        logOutThunkCreator
    })
)(Header);