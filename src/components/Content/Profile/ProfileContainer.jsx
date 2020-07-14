import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile} from "../../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 9261
        }
        this.props.getUserProfile(userId)
    }
    render() {
        if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.Profile.profile,
        isAuth: state.auth.isAuth
    }
}
let withRouterDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(withRouterDataContainerComponent)


