import React from "react";
import {connect} from "react-redux";
import {follow, unfollow, setCurrentPage, toggleIsFollowingInProgress, getUsers} from "../../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../../Common/Preloader/Preloader";
import {compose} from "redux";

// TODO перекинуть этот блок в profile

class UserBlock extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPages, this.props.pageSize)
    }
    onPageChanged = (page) => {
        this.props.getUsers(page, this.props.pageSize)
        this.props.setCurrentPage(page)
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   currentPages={this.props.currentPages}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.Users.users,
        pageSize: state.Users.pageSize,
        totalUsersCount: state.Users.totalUsersCount,
        currentPages: state.Users.currentPages,
        isFetching: state.Users.isFetching,
        followingInProgress: state.Users.followingInProgress
    }
}


export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleIsFollowingInProgress, getUsers})
)(UserBlock)


