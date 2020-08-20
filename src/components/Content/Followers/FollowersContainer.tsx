import React from 'react';
import {connect} from 'react-redux';
import {follow, setUsers, unfollow} from '../../../Redux/Thunks/userThunks';
import Users from './Users';
import Preloader from '../../Common/Preloader/Preloader';
import {compose} from 'redux';
import {
    getCurrentPages,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from '../../../Redux/Selectors/usersSelectros';
import {userActions} from '../../../Redux/Actions/userActionCreators';
import {UsersType} from '../../../types/types';
import {AppStateType} from '../../../Redux/redux-store';
import {FilterType} from '../../../Redux/Reducers/usersReducer';

const {setCurrentPage, toggleIsFollowingInProgress} = userActions

type MapStateToProps = {
    currentPages: number
    pageSize: number
    isFetching: boolean
    followingInProgress: Array<number>
    totalItemsCount: number
    users: Array<UsersType>
    filter: FilterType
}


type MapDispatchToProps = {
    setUsers: (currentPages: number, pageSize: number, filter: FilterType) => void
    setCurrentPage: (page: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

type OwnPropsType = {}


class UserBlock extends React.Component<MapStateToProps & MapDispatchToProps & OwnPropsType> {
    componentDidMount() {
        const {currentPages, pageSize, filter} = this.props
        this.props.setUsers(currentPages, pageSize, filter)
    }

    onPageChanged = (page: number) => {
        const {pageSize, filter} = this.props
        this.props.setUsers(page, pageSize, filter)
        this.props.setCurrentPage(page)
    }

    onFilterChanged = (filter: FilterType) => {
        const {pageSize} = this.props
        this.props.setUsers(1, pageSize, filter)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalItemsCount={this.props.totalItemsCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   currentPages={this.props.currentPages}
                   onPageChanged={this.onPageChanged}
                   onFilterChanged={this.onFilterChanged}
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
        followingInProgress: getFollowingInProgress(state),
        filter: getUsersFilter(state)
    }
}


export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleIsFollowingInProgress,
        setUsers
    })
)(UserBlock)


