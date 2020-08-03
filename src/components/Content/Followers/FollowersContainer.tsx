import React from "react";
import {connect} from "react-redux";
import {follow, setUsers, unfollow} from "../../../Redux/Thunks/userThunks";
import Users from "./Users";
import Preloader from "../../Common/Preloader/Preloader";
import {compose} from "redux";
import {getCurrentPages, getFollowingInProgress, getIsFetching,
    getPageSize, getTotalUsersCount, getUsersSuper} from "../../../Redux/Selectors/usersSelectros";
import {setCurrentPage, toggleIsFollowingInProgress} from "../../../Redux/Actions/userActionCreators";
import {UsersType} from "../../../types/types";
import {AppStateType} from "../../../Redux/redux-store";

type PropsType = {
    currentPages: number
    pageSize: number
    isFetching: boolean
    followingInProgress: Array<number>
    totalItemsCount: number
    page: number
    users: Array<UsersType>
    setUsers: (currentPages: number, pageSize: number) => void
    setCurrentPage: (page: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

class UserBlock extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPages, pageSize} = this.props
        this.props.setUsers(currentPages, pageSize)
    }

    onPageChanged = (page: number) => {
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
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType) => {
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


