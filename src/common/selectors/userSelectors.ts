import {StateType, UserType} from "../types/types";

export const getUserInfo = (state: StateType): UserType =>{
    return state.userPage.userInfo
}
export const getIsFetching = (state: StateType): boolean => {
    return state.userPage.isFetching
}
export const getUserStatus = (state: StateType): string => {
    return state.userPage.userStatus
}
export const getRedirect = (state: StateType): boolean => {
    return state.userPage.redirect
}
export const getError = (state: StateType): string | null => {
    return state.userPage.error
}
export const getIsLoadNewFile = (state: StateType): boolean => {
    return state.userPage.isLoadNewFile
}
