import {usersAPI} from "../../DAL/api";
import {followSuccess, setTotalUserCount, setUsersAC,
    toggleIsFetching,toggleIsFollowingInProgress, unfollowSuccess} from "../Actions/userActionCreators";

export const setUsers = (currentPages, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let data = await usersAPI.getUsers(currentPages, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setTotalUserCount(data.totalCount))
    dispatch(setUsersAC(data.items))

}
const followUnfollow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingInProgress(true, userId))
    let response = await apiMethod(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingInProgress(false, userId))
}
export const follow = (userId) => async (dispatch) => {
    followUnfollow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}
export const unfollow = (userId) => async (dispatch) => {
    followUnfollow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}
