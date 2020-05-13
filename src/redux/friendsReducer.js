import { getUsers, getNewUsersPage, followApi, unfollowApi } from "../api/api";

let SETUSERS = "SET-USERS";
let SETTOTALUSERSCOUNT = "SET-TOTAL-USERS-COUNT";
let SETNEWSELECTEDPAGE = "SET-NEW-SELECTED-PAGE";
let ISFETCHINGTOGGLE = "IS-FETCHING-TOGGLE";
let FOLLOWFUNCTION = "FOLLOW-FUNCTION";
let FOLLOWLOAD = "FOLLOW-LOAD";

export const followFunctionActionCreator = (id) => {
    return { type: FOLLOWFUNCTION, id }
}
export const setUsersActionCreator = (users) => {
    return { type: SETUSERS, users }
}
export const setTotalUsersCountActionCreator = (num) => {
    return { type: SETTOTALUSERSCOUNT, num }
}
export const setNewSelectedPageActionCreator = (num) => {
    return { type: SETNEWSELECTEDPAGE, num }
}
export const toggleIsFetchingActionCreator = (isFetching) => {
    return { type: ISFETCHINGTOGGLE, isFetching }
}
export const toggleFollowLoad = (isFollowLoad, id) => {
    return { type: FOLLOWLOAD, isFollowLoad, id }
}



let initialStore = {
    friendsData: [],
    pageSize: 30,
    totalUsersCount: 0,
    selectedPage: 1,
    isFetching: true,
    followLoad: [],
    isFollowLoad: false,
    paginationPortion: 7
}

const friendsReducer = (state = initialStore, action) => {
    let stateCopy = { ...state }
    stateCopy.friendsData = [...state.friendsData]
    stateCopy.followLoad = [...state.followLoad]

    switch (action.type) {
        case FOLLOWFUNCTION:
             stateCopy.friendsData.map( u => {
                if (u.id === action.id){
                    if (u.followed === false) {
                        u.followed = true
                    } else { u.followed = false }
                }
            })
            return stateCopy;
        case SETUSERS:
            stateCopy.friendsData = action.users;
            return stateCopy;
        case SETTOTALUSERSCOUNT:
            stateCopy.totalUsersCount = action.num;
            return stateCopy;
        case SETNEWSELECTEDPAGE:
            stateCopy.selectedPage = action.num;
            return stateCopy;
        case ISFETCHINGTOGGLE:
            stateCopy.isFetching = action.isFetching;
            return stateCopy;
        case FOLLOWLOAD:
            if (action.isFollowLoad === true) {
                stateCopy.followLoad.push(action.id)
            } else {
                stateCopy.followLoad = stateCopy.followLoad.filter(id => id !== action.id)
            }
            return stateCopy;
        default: return stateCopy;
    }
}

export const getUsersThunkCreator = (pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true));
        let response = await getUsers(pageSize)
            dispatch(setUsersActionCreator(response.data.items));
            dispatch(setTotalUsersCountActionCreator(response.data.totalCount));
            dispatch(toggleIsFetchingActionCreator(false));
    }
}
export const getNewUsersPageThunkCreator = (pageSize, p) => {
    return async (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true));
        let response = await getNewUsersPage(pageSize, p)
            dispatch(setNewSelectedPageActionCreator(p));
            dispatch(setUsersActionCreator(response.data.items));
            dispatch(toggleIsFetchingActionCreator(false));
    }
}
export const followThunkCreator = (id, isFollowed) => {
    return async (dispatch) => {
        dispatch(toggleFollowLoad(true, id))
            let response = await followUnfollowAPI(isFollowed, id)
                if (response.data.resultCode === 0) {
                    dispatch(followFunctionActionCreator(id))
                    dispatch(toggleFollowLoad(false, id))
                } else {
                    dispatch(toggleFollowLoad(false, id))
                }
    }
}

export const followUnfollowAPI = async (isFollowed, id) => {
    if(isFollowed === true){return await unfollowApi(id)
    }else{
        return await followApi(id)
    }
}

export default friendsReducer;