import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 9261
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.Profile.profile,
        status: state.Profile.status
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


