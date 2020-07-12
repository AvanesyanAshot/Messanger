import React from "react";
import {connect} from "react-redux";
import {follow, setUsers, unfollow} from "../../../Redux/usersReducer";
import Profile from "./Profile";
import * as axios from "axios";
import css from "./Profile.module.css";
import Userprofile from "./Contents/Profile/Userprofile";
import {setUserProfile} from "../../../Redux/profileReducer";



class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response=>{
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.Profile.profile
    }
}
export default connect(mapStateToProps, {
    setUserProfile
})(ProfileContainer)


