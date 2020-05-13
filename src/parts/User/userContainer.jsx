import React from "react";
import User from "./user";
import {connect} from "react-redux";
import {
    savePhoto,
    putNewStatusThunkCreator,
    userPageThunkCreator,
    setUserActionCreator,
    toggleIsFetchingActionCreator,
    uploadNewInfo
} from "../../redux/userReducer";
import Preloader from "../preloader/preloader";
import {withRouter, Redirect} from "react-router-dom";
import {compose} from "redux"
import {
    getUserInfo,
    getIsFetching,
    getUserStatus,
    getRedirect,
    getMyId,
    getError, getIsLoadNewFile
} from "../../common/selectors/userSelectors";
import {useEffect} from "react";

const UserBD = (props) => {

    let putNewStatus = (status) => {
        props.putNewStatusThunkCreator(status);
    }

    useEffect(() => {
        props.userPageThunkCreator(props.match.params.id)
    }, [props.match.params.id]);

    let isOwner = props.myId === props.userInfo.userId;

    if (props.redirect) return <Redirect to="/login"/>
    return (<>
            {props.isFetching ? <Preloader/> :
                <User
                    isLoadNewFile={props.isLoadNewFile}
                    error={props.error}
                    uploadNewInfo={props.uploadNewInfo}
                    savePhoto={props.savePhoto}
                    isOwner={isOwner}
                    userInfo={props.userInfo}
                    userStatus={props.userStatus}
                    putNewStatus={putNewStatus}/>
            }
        </>
    );
}

let mapStateToProps = (state) => {
    return {
        userInfo: getUserInfo(state),
        isFetching: getIsFetching(state),
        userStatus: getUserStatus(state),
        redirect: getRedirect(state),
        myId: getMyId(state),
        error: getError(state),
        isLoadNewFile: getIsLoadNewFile(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        uploadNewInfo,
        putNewStatusThunkCreator,
        userPageThunkCreator,
        savePhoto,
        toggleIsFetching: toggleIsFetchingActionCreator,
        setUser: setUserActionCreator
    }),
    withRouter,
)(UserBD);
