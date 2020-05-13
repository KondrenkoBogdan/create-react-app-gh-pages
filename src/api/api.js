import * as axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "612154b8-8db3-4429-bddc-db75168ed10b"
    }
})

export const getUsers = (pageSize) => {
    return instance.get("users?count=" + pageSize)
}

export const getNewUsersPage = (pageSize, p) => {
    return instance.get("users?count=" + pageSize + "&page=" + p)
}

export const followApi = (id) => {
    return instance.post("follow/" + id)
}
export const unfollowApi = (id) => {
    return instance.delete("follow/" + id)
}

export const authF = () => {
    return instance.get("auth/me")
}

export const userPage = (userId) => {
    return instance.get("profile/" + userId)
}

export const getUserStatusAPI = (id) => {
    return instance.get("profile/status/" + id)
}

export const putNewStatus = (status) => {
    return instance.put("profile/status", {status: status})
}

export const loginApi = (submitInfo) => {
    return instance.post("auth/login", {email:submitInfo.email, password:submitInfo.password, rememberMe: submitInfo.rememberMe, captcha: submitInfo.captcha})
}

export const logOutApi = () => {
    return instance.delete("auth/login")
}

export const uploadPhoto = (photoFile) => {
    let formData = new FormData()
    formData.append("image", photoFile)
    return instance.put("profile/photo", formData, {
        headers:{
            "Content-type": "multipart/form-data"
        }
    })
}

export const uploadNewUserInfo = (profile) => {
    return instance.put("profile", profile)
}

export const captchaUrl = () => {
    return instance.get("security/get-captcha-url")
}