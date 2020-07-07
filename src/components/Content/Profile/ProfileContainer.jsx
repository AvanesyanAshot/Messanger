import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";

let mapStateToProps = (state) => {
    // debugger
    // return {
    //     state: state.Users
    // }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer


