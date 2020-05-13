import React from "react";
import { connect } from "react-redux";
import { followThunkCreator, getNewUsersPageThunkCreator, getUsersThunkCreator, followFunctionActionCreator, setUsersActionCreator, setTotalUsersCountActionCreator, setNewSelectedPageActionCreator, toggleFollowLoad } from "../../redux/friendsReducer"
import Users from "./Friends";
import { compose } from "redux";
import { useEffect } from "react";
import { getFollowLoad, getPageCount, getIsFetching, getFriendsData, getTotalUsersCount, getPageSize, getSelectedPage, getPaginationPortion } from "../../common/selectors/usersSelectors";



const Friends = (props) => {

    useEffect(() => {
        props.getUsersThunkCreator(props.pageSize)
    }, [props.pageSize])

    let pageChanger = (p) => {
        props.getNewUsersPageThunkCreator(props.pageSize, p)
    }
    let followF = (id, isFollowed) => {
        props.followThunkCreator(id, isFollowed)
    }
    let isFollowedB = (people) => {
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

let mapStateToProps = (state) => {
    return {
        isFetching: getIsFetching(state),
        friendsData: getFriendsData(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        selectedPage: getSelectedPage(state),
        pagesCount: getPageCount(state),
        followLoad: getFollowLoad(state),
        paginationPortion: getPaginationPortion(state),
    }
}

export default compose(
    connect(mapStateToProps,
        {
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