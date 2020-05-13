export const getIsFetching = (state) => {
    return state.friendsPage.isFetching
}
export const getFriendsData = (state) => {
    return state.friendsPage.friendsData
}
export const getTotalUsersCount = (state) => {
    return state.friendsPage.totalUsersCount
}
export const getPageSize = (state) => {
    return state.friendsPage.pageSize
}
export const getSelectedPage = (state) => {
    return state.friendsPage.selectedPage
}
export const getPageCount = (state) => {
    return Math.ceil((state.friendsPage.totalUsersCount) / (state.friendsPage.pageSize))
}
export const getFollowLoad = (state) => {
    return state.friendsPage.followLoad
}
export const getPaginationPortion = (state) => {
    return state.friendsPage.paginationPortion
}



