import {UserType, StateType} from "../types/types";

export const getIsFetching = (state: StateType): boolean => {
    return state.friendsPage.isFetching
}
export const getFriendsData = (state: StateType): Array<UserType> => {
    return state.friendsPage.friendsData
}
export const getTotalUsersCount = (state: StateType): number => {
    return state.friendsPage.totalUsersCount
}
export const getPageSize = (state: StateType): number => {
    return state.friendsPage.pageSize
}
export const getSelectedPage = (state: StateType):number => {
    return state.friendsPage.selectedPage
}
export const getPageCount = (state: StateType): number => {
    return Math.ceil((state.friendsPage.totalUsersCount) / (state.friendsPage.pageSize))
}
export const getFollowLoad = (state: StateType): Array<number> => {
    return state.friendsPage.followLoad
}
export const getPaginationPortion = (state: StateType): number => {
    return state.friendsPage.paginationPortion
}



