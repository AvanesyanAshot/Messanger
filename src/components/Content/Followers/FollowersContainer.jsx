import React from "react";
import {connect} from "react-redux";
import Followers from "./Followers";
import {followAC, setUsersAC, unfollowAC} from "../../../Redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        state: state.Users
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
        }
    }
}
const FollowersContainer = connect(mapStateToProps, mapDispatchToProps)(Followers)

export default FollowersContainer


