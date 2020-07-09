import React from "react";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../../Redux/usersReducer";
import ProfileC from "./ProfileC";

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
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileC)

export default ProfileContainer


