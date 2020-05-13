export const getUserInfo = (state) =>{
    return state.userPage.userInfo
}
export const getIsFetching = (state) => {
    return state.userPage.isFetching
}
export const getMyId = (state) => {
    return state.auth.id
}
export const getUserStatus = (state) => {
    return state.userPage.userStatus
}
export const getRedirect = (state) => {
    return state.userPage.redirect
}
export const getError = (state) => {
    return state.userPage.error
}
export const getIsLoadNewFile = (state) => {
    return state.userPage.isLoadNewFile
}