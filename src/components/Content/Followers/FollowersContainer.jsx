import React from "react";
import {connect} from "react-redux";
import {follow, unfollow, setCurrentPage, setTotalUserCount, setUsers, toggleIsFetching} from "../../../Redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../../Common/Preloader/Preloader";

// TODO перекинуть этот блок в profile

class UserBlock extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPages}&count=${this.props.pageSize}`,{
            withCredentials:true
        })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                // this.props.setTotalUserCount(response.data.totalCount)
            })
    }
    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,{
            withCredentials:true
        })
            .then(response => {
                this.props.toggleIsFetching(false)

                this.props.setUsers(response.data.items)

            })
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   currentPages={this.props.currentPages}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
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
    }
}

const FollowersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    toggleIsFetching
})(UserBlock)

export default FollowersContainer


