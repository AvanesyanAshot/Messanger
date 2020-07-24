import React from "react";
import {connect} from "react-redux";
import {follow, unfollow, setCurrentPage, toggleIsFollowingInProgress, setUsers} from "../../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPages,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,getUsersSuper
} from "../../../Redux/Selectors/usersSelectros";

// TODO перекинуть этот блок в profile

class UserBlock extends React.Component {
    componentDidMount() {
        const {currentPages, pageSize} = this.props
        this.props.setUsers(currentPages, pageSize)
    }
    onPageChanged = (page) => {
        const {pageSize} = this.props
        this.props.setUsers(page, pageSize)
        this.props.setCurrentPage(page)
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalItemsCount={this.props.totalItemsCount}
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
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalUsersCount(state),
        currentPages: getCurrentPages(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleIsFollowingInProgress, setUsers})
)(UserBlock)


