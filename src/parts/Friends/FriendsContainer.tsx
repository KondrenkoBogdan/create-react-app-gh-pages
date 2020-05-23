import React, {FC} from "react";
import { connect } from "react-redux";
import { followThunkCreator, getNewUsersPageThunkCreator, getUsersThunkCreator, followFunctionActionCreator, setUsersActionCreator, setTotalUsersCountActionCreator, setNewSelectedPageActionCreator, toggleFollowLoad } from "../../redux/friendsReducer"
import Users from "./Friends";
import { compose } from "redux";
import { useEffect } from "react";
import { getFollowLoad, getPageCount, getIsFetching, getFriendsData, getTotalUsersCount, getPageSize, getSelectedPage, getPaginationPortion } from "../../common/selectors/usersSelectors";
import {UserType} from "../../common/types/types";


type PropsType = {
    isFetching: boolean,
    friendsData: Array<UserType>,
    totalUsersCount: number,
    pageSize: number,
    selectedPage: number,
    pagesCount: number,
    followLoad: Array<number>,
    paginationPortion: number,
    toggleFollowLoad: any,
    getUsersThunkCreator: any,
    getNewUsersPageThunkCreator: any,
    followThunkCreator: any,
    follow: any,
    setUsers:any,
    setTotalUsersCount: any,
    setNewSelectedPage: any
}
const Friends: FC<PropsType> = (props) => {

    useEffect(() => {
        props.getUsersThunkCreator(props.pageSize)
    }, [props.pageSize])

    let pageChanger = (p:number) => {
        props.getNewUsersPageThunkCreator(props.pageSize, p)
    }
    let followF = (id:number, isFollowed:boolean) => {
        props.followThunkCreator(id, isFollowed)
    }
    let isFollowedB = (people:any) => {
        if (people === true) {
            return (<span style={{ color: "red" }} >UNFOLLOW</span>)
        } else {
            return (<span>FOLLOW</span>)
        }
    }

    return <>
        <Users
            {...props}
            follow={followF}
            pageChanger={pageChanger}
            isFollowedB={isFollowedB}
        />
    </>
}

let mapStateToProps = (state:any) => {
    return {
        isFetching: getIsFetching(state) as boolean,
        friendsData: getFriendsData(state) as Array<UserType>,
        totalUsersCount: getTotalUsersCount(state) as number,
        pageSize: getPageSize(state) as number,
        selectedPage: getSelectedPage(state) as number,
        pagesCount: getPageCount(state) as number,
        followLoad: getFollowLoad(state) as Array<number>,
        paginationPortion: getPaginationPortion(state) as number,
    }
}

export default compose(
    connect(mapStateToProps,{
            toggleFollowLoad,
            getUsersThunkCreator,
            getNewUsersPageThunkCreator,
            followThunkCreator,
            follow: followFunctionActionCreator,
            setUsers: setUsersActionCreator,
            setTotalUsersCount: setTotalUsersCountActionCreator,
            setNewSelectedPage: setNewSelectedPageActionCreator
        })
)(Friends);
