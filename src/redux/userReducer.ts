import { userPage, putNewStatus, getUserStatusAPI, authF, uploadPhoto, uploadNewUserInfo } from "../api/api";
import { stopSubmit } from "redux-form";
import {UserType} from "../common/types/types";

const SETUSER = "SET-USER";
const TOGGLEISFETCHIND = "TOGGLE-IS-FETCHIND";
const NEWSTATUSTOSTATE = "NEW-STATUS-TO-STATE";
const SETUSERSTATUS = "SET-USER-STATUS";
const REDIRECT = "REDIRECT";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS";
const ERROR_CREATOR = "ERROR-CREATOR";
const IS_LOAD_NEW_FILE = "IS-LOAD-NEW-FILE";
//======================================================================================================================
type setUserActionCreatorType = {
    type: typeof SETUSER,
    user: UserType
}
export const setUserActionCreator = (user: UserType): setUserActionCreatorType => {
    return { type: SETUSER, user }
};
//======================================================================================================================
type toggleIsFetchingActionCreatorType = {
    type: typeof TOGGLEISFETCHIND,
    isFetching: boolean
}
export const toggleIsFetchingActionCreator = (isFetching: boolean): toggleIsFetchingActionCreatorType => {
    return { type: TOGGLEISFETCHIND, isFetching }
};
//======================================================================================================================
type newStatusToItitialStateTpye = {
    type: typeof NEWSTATUSTOSTATE,
    status: string
}
export const newStatusToItitialState = (status: string): newStatusToItitialStateTpye => {
    return { type: NEWSTATUSTOSTATE, status }
};
//======================================================================================================================
type setUserStatusType = {
    type: typeof SETUSERSTATUS,
    status: string
}
export const setUserStatus = (status: string): setUserStatusType => {
    return { type: SETUSERSTATUS, status }
};
//======================================================================================================================
type redirectToLoginType = {
    type: typeof REDIRECT,
    isRedirect: boolean
}
export const redirectToLogin = (isRedirect: boolean): redirectToLoginType => {
    return { type: REDIRECT, isRedirect }
};
//======================================================================================================================
type savePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: string
}
export const savePhotoSuccess = (photos:string): savePhotoSuccessType => {
    return {type: SAVE_PHOTO_SUCCESS, photos}
};
//======================================================================================================================
type setErrorActionCreatorType = {
    type: typeof ERROR_CREATOR,
    error: string | null
}
export const setErrorActionCreator = (error: string | null): setErrorActionCreatorType => {
    return {type: ERROR_CREATOR, error}
}
//======================================================================================================================
type isLoadNewFileTogglerType = {
    type: typeof IS_LOAD_NEW_FILE,
    isLoad: boolean
}
export const isLoadNewFileToggler = (isLoad: boolean): isLoadNewFileTogglerType => {
    return {type: IS_LOAD_NEW_FILE, isLoad}
}


let initialState = {
    userInfo: {} as UserType,
    userStatus: "",
    isFetching: false,
    redirect: false,
    error: null,
    isLoadNewFile: false
}
type InitialStateType = typeof initialState;

const userReducer = (state = initialState, action:any):InitialStateType => {

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

export const userPageThunkCreator = (id: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetchingActionCreator(true))
        let isFetchingWaiter = 0;
        let response1 = await authF();
        let userId = id;
        if (!userId) { if (!response1.data.data.id) { dispatch(redirectToLogin(true)) } else { userId = response1.data.data.id } }
        let response2 = await userPage(userId);
        isFetchingWaiter = isFetchingWaiter + 1;
        dispatch(setUserActionCreator(response2.data));


        let response3 = await getUserStatusAPI(userId);
        isFetchingWaiter = isFetchingWaiter + 1
        dispatch(setUserStatus(response3.data))

        if(isFetchingWaiter===2){
            dispatch(toggleIsFetchingActionCreator(false))
        }

    }
}

export const putNewStatusThunkCreator = (newStatus:string) => {
    return async (dispatch:any) => {
        await putNewStatus(newStatus)
            dispatch(newStatusToItitialState(newStatus))
    }
}

export const savePhoto = (photo:any) => {
    return async (dispatch:any) => {
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
export const uploadNewInfo = (data:UserType) => {
    return async (dispatch:any, getState: any) => {
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

export default userReducer;
