import React from "react";
import {connect} from "react-redux";
import {follow, setUsers, unfollow} from "../../../Redux/usersReducer";
import ProfileC from "./ProfileC";

let mapStateToProps = (state) => {
    return {
        state: state.Users
    }
}

const ProfileContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers
})(ProfileC)

export default ProfileContainer


