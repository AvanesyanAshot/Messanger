import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";
import {compose} from "redux";
import {getProfile, getStatus} from "../../../Redux/Selectors/profileSelectors";
import {getAuthId, getIsAuth} from "../../../Redux/Selectors/authSelectors";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if(!this.props.authorizedUserId){
                this.props.history.push('/login')
            }
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
        profile: getProfile(state),
        status: getStatus(state),
        authorizedUserId: getAuthId(state),
        isAuth: getIsAuth(state)
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


