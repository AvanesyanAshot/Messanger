import React from "react";
import {connect} from "react-redux";
import Followers from "./Followers";
import {followAC, setCurrentPage, setTotalUserCount, setUsersAC, unfollowAC} from "../../../Redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.Users.users,
        pageSize: state.Users.pageSize,
        totalUsersCount: state.Users.totalUsersCount,
        currentPages: state.Users.currentPages
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPage(page))
        },
        setTotalUserCount: (num) => {
            dispatch(setTotalUserCount(num))
        }
    }
}
const FollowersContainer = connect(mapStateToProps, mapDispatchToProps)(Followers)

export default FollowersContainer


