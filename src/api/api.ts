import * as axios from "axios"
import {UserType} from "../common/types/types";

// @ts-ignore
const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "612154b8-8db3-4429-bddc-db75168ed10b"
    }
})

type universalResponseType = {
    data:any,
    resultCode: number,
    message: Array<string>
}
// type ItemsType = {
//     id: number,
//     name: string,
//     uniqueUrlName: any,
//     status:string|null,
//     photos: PhotosType,
//     followed: boolean,
// }
type getUsersDataType = {
    items:Array<UserType>,
    totalCount: number,
    error: string|null
}
type getUsersResponseType = {
    data:getUsersDataType,
    resultCode: number,
    message: Array<string>
}
export const getUsers = (pageSize:number): getUsersResponseType => {
    return instance.get("users?count=" + pageSize)
}

export const getNewUsersPage = (pageSize:number, p:number): getUsersResponseType => {
    return instance.get("users?count=" + pageSize + "&page=" + p)
}

export const followApi = (id:number): universalResponseType => {
    return instance.post("follow/" + id)
}
export const unfollowApi = (id:number): universalResponseType => {
    return instance.delete("follow/" + id)
}

export const authF = (): universalResponseType => {
    return instance.get("auth/me")
}
type userPageResponseType = {
    data: UserType,
    resultCode: number,
    message: Array<string>
}
export const userPage = (userId:number):userPageResponseType=> {
    return instance.get("profile/" + userId)
}

export const getUserStatusAPI = (id:number): any => {
    return instance.get("profile/status/" + id)
}

export const putNewStatus = (status:string): universalResponseType => {
    return instance.put("profile/status", {status: status})
}
type submitInfoType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string | null
}
export const loginApi = (submitInfo: submitInfoType): universalResponseType => {
    return instance.post("auth/login", {email:submitInfo.email, password:submitInfo.password, rememberMe: submitInfo.rememberMe, captcha: submitInfo.captcha})
}

export const logOutApi = (): universalResponseType => {
    return instance.delete("auth/login")
}

export const uploadPhoto = (photoFile: any): universalResponseType  => {
    let formData = new FormData()
    formData.append("image", photoFile)
    return instance.put("profile/photo", formData, {
        headers:{
            "Content-type": "multipart/form-data"
        }
    })
}

export const uploadNewUserInfo = (profile: UserType):universalResponseType => {
    return instance.put("profile", profile)
}

export const captchaUrl = (): universalResponseType => {
    return instance.get("security/get-captcha-url")
}
