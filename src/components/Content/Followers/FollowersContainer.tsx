import React from "react";
import {connect} from "react-redux";
import {follow, setUsers, unfollow} from "../../../Redux/Thunks/userThunks";
import Users from "./Users";
import Preloader from "../../Common/Preloader/Preloader";
import {compose} from "redux";
import {getCurrentPages, getFollowingInProgress, getIsFetching,
    getPageSize, getTotalUsersCount, getUsers} from "../../../Redux/Selectors/usersSelectros";
import {userActions} from "../../../Redux/Actions/userActionCreators";
import {UsersType} from "../../../types/types";
import {AppStateType} from "../../../Redux/redux-store";

const {setCurrentPage, toggleIsFollowingInProgress} = userActions

type MapStateToProps = {
    currentPages: number
    pageSize: number
    isFetching: boolean
    followingInProgress: Array<number>
    totalItemsCount: number
    users: Array<UsersType>
}


type MapDispatchToProps = {
    setUsers: (currentPages: number, pageSize: number) => void
    setCurrentPage: (page: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

type OwnPropsType = {}

type PropsType = MapStateToProps & MapDispatchToProps & OwnPropsType

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

let mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalUsersCount(state),
        currentPages: getCurrentPages(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose(
    // @ts-ignore
    connect<MapStateToProps, MapDispatchToProps, OwnPropsType, AppStateType>(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleIsFollowingInProgress,
        setUsers
    })
)(UserBlock)


