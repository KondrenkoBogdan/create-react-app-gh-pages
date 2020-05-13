import { userPage, putNewStatus, getUserStatusAPI, authF, uploadPhoto, uploadNewUserInfo } from "../api/api";
import { stopSubmit } from "redux-form";

const SETUSER = "SET-USER";
const TOGGLEISFETCHIND = "TOGGLE-IS-FETCHIND";
const NEWSTATUSTOSTATE = "NEW-STATUS-TO-STATE";
const SETUSERSTATUS = "SET-USER-STATUS";
const REDIRECT = "REDIRECT";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS";
const ERROR_CREATOR = "ERROR-CREATOR";
const IS_LOAD_NEW_FILE = "IS-LOAD-NEW-FILE"

export const setUserActionCreator = (user) => {
    return { type: SETUSER, user }
}
export const toggleIsFetchingActionCreator = (isFetching) => {
    return { type: TOGGLEISFETCHIND, isFetching }
}
export const newStatusToItitialState = (status) => {
    return { type: NEWSTATUSTOSTATE, status }
}
export const setUserStatus = (status) => {
    return { type: SETUSERSTATUS, status }
}
export const redirectToLogin = (isRedirect) => {
    return { type: REDIRECT, isRedirect }
}
export const savePhotoSuccess = (photos) => {
    return {type: SAVE_PHOTO_SUCCESS, photos}
}
export const setErrorActionCreator = (error) => {
    return {type: ERROR_CREATOR, error}
}
export const isLoadNewFileToggler = (isLoad) => {
    return {type: IS_LOAD_NEW_FILE, isLoad}
}

let initialState = {
    userInfo: {},
    userStatus: "",
    isFetching: false,
    redirect: false,
    error: null,
    isLoadNewFile: false
}

const userReducer = (state = initialState, action) => {

    let stateCopy = { ...state }
    stateCopy.userInfo = { ...state.userInfo }
    stateCopy.userInfo.photos = { ...state.userInfo.photos }
    stateCopy.userInfo.contacts ={...state.userInfo.contacts}

    switch (action.type) {
        case REDIRECT:
            stateCopy.redirect = action.isRedirect;
            return stateCopy;
        case SETUSER:
            stateCopy.userInfo = action.user;
            return stateCopy;
        case TOGGLEISFETCHIND:
            stateCopy.isFetching = action.isFetching;
            return stateCopy;
        case NEWSTATUSTOSTATE:
        case SETUSERSTATUS:
            stateCopy.userStatus = action.status;
            return stateCopy;
        case SAVE_PHOTO_SUCCESS:
            stateCopy.userInfo.photos = action.photos;
            return stateCopy;
        case ERROR_CREATOR:
            stateCopy.error = action.error;
            return stateCopy;
        case IS_LOAD_NEW_FILE:
            stateCopy.isLoadNewFile = action.isLoad;
            return stateCopy;
        default: return stateCopy;
    }
}

export const userPageThunkCreator = (id) => {
    return async (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true))
        let isFetchingWaiter = 0;
        let response1 = await authF()
        let userId = id
        if (!userId) { if (!response1.data.data.id) { dispatch(redirectToLogin(true)) } else { userId = response1.data.data.id } }

        let response2 = await userPage(userId)
        isFetchingWaiter = isFetchingWaiter + 1
        dispatch(setUserActionCreator(response2.data));


        let response3 = await getUserStatusAPI(userId)
        isFetchingWaiter = isFetchingWaiter + 1
        dispatch(setUserStatus(response3.data))

        if(isFetchingWaiter===2){
            dispatch(toggleIsFetchingActionCreator(false))
        }

    }
}

export const putNewStatusThunkCreator = (newStatus) => {
    return async (dispatch) => {
        await putNewStatus(newStatus)
            dispatch(newStatusToItitialState(newStatus))
    }
}

export const savePhoto = (photo) => {
    return async (dispatch) => {
        dispatch(isLoadNewFileToggler(true))
        let response = await uploadPhoto(photo)
            if(response.data.resultCode === 0){
                dispatch(savePhotoSuccess(response.data.data.photos));
                dispatch(setErrorActionCreator(null));
                dispatch(isLoadNewFileToggler(false))
            } else {
                dispatch(setErrorActionCreator(response.data.messages));
                dispatch(isLoadNewFileToggler(false))
            }
    }
}
export const uploadNewInfo = (data) => {
    return async (dispatch, getState) => {
        let id = getState().auth.userId;
        let response = await uploadNewUserInfo(data)
            if(response.data.resultCode === 0){
                dispatch(userPageThunkCreator(id));
            } else { 
                let action = stopSubmit("EditProfileForm", {_error: response.data.messages})
                dispatch(action)
            }
    }
}


export default userReducer