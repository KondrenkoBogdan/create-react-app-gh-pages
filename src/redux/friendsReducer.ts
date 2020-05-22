import { getUsers, getNewUsersPage, followApi, unfollowApi } from "../api/api";
import {SmallUserType} from "../common/types/types";

let SETUSERS = "SET-USERS";
let SETTOTALUSERSCOUNT = "SET-TOTAL-USERS-COUNT";
let SETNEWSELECTEDPAGE = "SET-NEW-SELECTED-PAGE";
let ISFETCHINGTOGGLE = "IS-FETCHING-TOGGLE";
let FOLLOWFUNCTION = "FOLLOW-FUNCTION";
let FOLLOWLOAD = "FOLLOW-LOAD";

type FollowFunctionActionType = {
    type: typeof FOLLOWFUNCTION
    id: number
}
export const followFunctionActionCreator = (id: number): FollowFunctionActionType => {
    return { type: FOLLOWFUNCTION, id }
}
type SetUsersActionType = {
    type: typeof SETUSERS
    users: Array<SmallUserType>
}
export const setUsersActionCreator = (users: Array<SmallUserType>): SetUsersActionType => {
    return { type: SETUSERS, users }
}

type SetTotalUsersCountActionCreator = {
    type: typeof SETTOTALUSERSCOUNT
    num: number
}
export const setTotalUsersCountActionCreator = (num: number): SetTotalUsersCountActionCreator => {
    return { type: SETTOTALUSERSCOUNT, num }
}

type SetNewSelectedPageActionType = {
    type: typeof SETNEWSELECTEDPAGE
    num: number
}
export const setNewSelectedPageActionCreator = (num: number):SetNewSelectedPageActionType  => {
    return { type: SETNEWSELECTEDPAGE, num }
}

type ToggleIsFetchingActionType = {
    type: typeof ISFETCHINGTOGGLE
    isFetching: boolean
}
export const toggleIsFetchingActionCreator = (isFetching: boolean): ToggleIsFetchingActionType => {
    return { type: ISFETCHINGTOGGLE, isFetching }
}

type ToggleFollowLoadType = {
    type: typeof FOLLOWLOAD
    isFollowLoad: boolean
    id: number
}
export const toggleFollowLoad = (isFollowLoad: boolean, id: number):ToggleFollowLoadType  => {
    return { type: FOLLOWLOAD, isFollowLoad, id }
}



let initialState = {
    friendsData: [] as Array<any>,
    pageSize: 100,
    totalUsersCount: 0,
    selectedPage: 1,
    isFetching: true,
    followLoad: [] as Array<any>,
    isFollowLoad: false,
    paginationPortion: 7
}
type InitialStoreType = typeof initialState

const friendsReducer = (state = initialState, action: any): InitialStoreType => {
    let stateCopy: typeof state = { ...state };
    stateCopy.friendsData = [...state.friendsData];
    stateCopy.followLoad = [...state.followLoad];

    switch (action.type) {
        case FOLLOWFUNCTION:
             stateCopy.friendsData.map( u => {
                if (u.id === action.id){
                    u.followed = u.followed === false;
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
            if (action.isFollowLoad === true){
                stateCopy.followLoad.push(action.id)
            } else {
                stateCopy.followLoad = stateCopy.followLoad.filter(id => id !== action.id)
            }
            return stateCopy;
        default: return stateCopy;
    }
}

export const getUsersThunkCreator = (pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetchingActionCreator(true));
        let response = await getUsers(pageSize)
            dispatch(setUsersActionCreator(response.data.items));
            dispatch(setTotalUsersCountActionCreator(response.data.totalCount));
            dispatch(toggleIsFetchingActionCreator(false));
    }
}
export const getNewUsersPageThunkCreator = (pageSize: number, p: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetchingActionCreator(true));
        let response = await getNewUsersPage(pageSize, p)
            dispatch(setNewSelectedPageActionCreator(p));
            dispatch(setUsersActionCreator(response.data.items));
            dispatch(toggleIsFetchingActionCreator(false));
    }
}
export const followThunkCreator = (id: number, isFollowed: boolean) => {
    return async (dispatch: any) => {
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

export const followUnfollowAPI = async (isFollowed: boolean, id: number) => {
    if(isFollowed){return await unfollowApi(id)
    }else{
        return await followApi(id)
    }
}

export default friendsReducer;
