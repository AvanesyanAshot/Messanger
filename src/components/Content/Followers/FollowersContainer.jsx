import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPage,
    setTotalUserCount,
    setUsersAC,
    toggleIsFetching,
    unfollowAC
} from "../../../Redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import preloader from '../../../assets/img/loader.svg'

// TODO перекинуть этот блок в profile

class UserBlock extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPages}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                // this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)

                this.props.setUsers(response.data.items)

            })
    }

    render() {
        return <>
            {this.props.isFetching ? <img src={preloader} alt="preloader"/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   currentPages={this.props.currentPages}
                   onPageChanged={this.onPageChanged}
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
        isFetching: state.Users.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPage(page))
        },
        setTotalUserCount: (num) => {
            dispatch(setTotalUserCount(num))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetching(isFetching))
        }
    }
}

const FollowersContainer = connect(mapStateToProps, mapDispatchToProps)(UserBlock)

export default FollowersContainer


