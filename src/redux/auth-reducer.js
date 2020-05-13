import { authF, loginApi, logOutApi, captchaUrl } from "../api/api";
import { stopSubmit } from "redux-form";
import { redirectToLogin } from "./userReducer";

let SETAUTHUSERDATA = "SET-AUTH-USER-DATA";
let ISFETCHINGTOGGLE = "IS-FETCHING-TOGGLE";
let SETAUTHSTATUS = "SET-AUTH-STATUS";
let SETINITIALIZED = "SET-INITIALIZED";
let SETCAPTCHAURL = "SET-CAPTCHA-URL";

export const setAuthUserDataActionCreator = (id, email, login) => {
    return { type: SETAUTHUSERDATA, data: { id, email, login } }
}
export const toggleIsFetchingActionCreator = (isFetching) => {
    return { type: ISFETCHINGTOGGLE, isFetching }
}
export const setAuthStatusActionCreator = (isAuth) => {
    return { type: SETAUTHSTATUS, isAuth }
}
export const setInitialized = () =>{
    return {type: SETINITIALIZED}
}
export const setCaptchaUrl = (captcha) => {
    return {type: SETCAPTCHAURL, captcha}
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    initialized: false,
    captcha: null
}

const authReducer = (state = initialState, action) => {

    let stateCopy = { ...state }

    switch (action.type) {
        case SETCAPTCHAURL:
            return{
                ...state,
                captcha: action.captcha
            }
        case SETINITIALIZED:
            return{
                ...state,
                initialized: true
            }
        case SETAUTHUSERDATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case ISFETCHINGTOGGLE:
            stateCopy.isFetching = action.isFetching;
            return stateCopy;
        case SETAUTHSTATUS:
            stateCopy.isAuth = action.isAuth;
            return stateCopy;
        default: return stateCopy;
    }
}

export const initializedThunkCreator = () => {
    return(dispatch) => {
        let promis = dispatch(authFThunkCreator())
        promis.then( () => {dispatch(setInitialized())})
    }
}

export const authFThunkCreator = () => {
    return async (dispatch) => {
        let response = await authF()
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setAuthUserDataActionCreator(id, email, login));
                dispatch(setAuthStatusActionCreator(true))
            } else { dispatch(setAuthStatusActionCreator(false)) }
    }
}
export const loginThunkCreator = (submitInfo) => {
    return async (dispatch) => {
        let response = await loginApi(submitInfo)
            if(response.data.resultCode === 0){
                dispatch(authFThunkCreator());
                dispatch(redirectToLogin())
            } else {
                let action = stopSubmit("login", {_error: response.data.messages})
                dispatch(action)
            }
            if(response.data.resultCode === 10){
                dispatch(getCaptchaThunkCreator())
            }
    }
}
export const logOutThunkCreator = () => {
    return async (dispatch) => {
        await logOutApi()
            dispatch(authFThunkCreator());
    }
}

export const getCaptchaThunkCreator = () => {
    return async (dispatch) => {
        let response = await captchaUrl()
        dispatch(setCaptchaUrl(response.data.url))
    }
}


export default authReducer;