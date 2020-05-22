import { authF, loginApi, logOutApi, captchaUrl } from "../api/api";
import { stopSubmit } from "redux-form";
import { redirectToLogin } from "./userReducer";

let SETAUTHUSERDATA = "SET-AUTH-USER-DATA";
let ISFETCHINGTOGGLE = "IS-FETCHING-TOGGLE";
let SETAUTHSTATUS = "SET-AUTH-STATUS";
let SETINITIALIZED = "SET-INITIALIZED";
let SETCAPTCHAURL = "SET-CAPTCHA-URL";

type SetAuthUserDataActionType = {
    type: typeof SETAUTHUSERDATA
    data: {id: number, email: string, login: string}
}
export const setAuthUserDataActionCreator = (id: number, email: string, login: string): SetAuthUserDataActionType => {
    return { type: SETAUTHUSERDATA, data: { id, email, login } }
}

type ToggleIsFetchingActionType = {
    type: typeof ISFETCHINGTOGGLE
    isFetching: boolean
}
export const toggleIsFetchingActionCreator = (isFetching: boolean): ToggleIsFetchingActionType => {
    return { type: ISFETCHINGTOGGLE, isFetching }
}

type SetAuthStatusActionCreator = {
    type: typeof SETAUTHSTATUS
    isAuth: boolean
}
export const setAuthStatusActionCreator = (isAuth: boolean): SetAuthStatusActionCreator => {
    return { type: SETAUTHSTATUS, isAuth }
}

type SetInitialized = {
    type: typeof SETINITIALIZED
}
export const setInitialized = () =>{
    return {type: SETINITIALIZED}
}

type SetCaptchaUrl = {
    type: typeof SETCAPTCHAURL
    captcha: string
}
export const setCaptchaUrl = (captcha: string): SetCaptchaUrl => {
    return {type: SETCAPTCHAURL, captcha}
}

let initialState = {
    id: null as number|null,
    email: null as string|null,
    login: null as string|null,
    isFetching: false,
    isAuth: false,
    initialized: false,
    captcha: null as string|null
}

type InitialStateType = typeof initialState;


const authReducer = (state = initialState, action: any) : InitialStateType => {

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
    return(dispatch: any) => {
        let promis = dispatch(authFThunkCreator())
        promis.then( () => {dispatch(setInitialized())})
    }
}

export const authFThunkCreator = () => {
    return async (dispatch: any) => {
        let response = await authF()
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setAuthUserDataActionCreator(id, email, login));
                dispatch(setAuthStatusActionCreator(true))
            } else { dispatch(setAuthStatusActionCreator(false)) }
    }
}
export const loginThunkCreator = (submitInfo: any) => {
    return async (dispatch: any) => {
        let response = await loginApi(submitInfo)
            if(response.data.resultCode === 0){
                dispatch(authFThunkCreator());
                dispatch(redirectToLogin(true))
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
    return async (dispatch: any) => {
        await logOutApi()
            dispatch(authFThunkCreator());
    }
}

export const getCaptchaThunkCreator = () => {
    return async (dispatch: any) => {
        let response = await captchaUrl()
        dispatch(setCaptchaUrl(response.data.url))
    }
}


export default authReducer;
