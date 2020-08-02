import {usersAPI} from "../../DAL/api";
import {followSuccess, setTotalUserCount, setUsersAC,
    toggleIsFetching,toggleIsFollowingInProgress, unfollowSuccess} from "../Actions/userActionCreators";

export const setUsers = (currentPages: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    let data = await usersAPI.getUsers(currentPages, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setTotalUserCount(data.totalCount))
    dispatch(setUsersAC(data.items))

}
const followUnfollow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleIsFollowingInProgress(true, userId))
    let response = await apiMethod(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingInProgress(false, userId))
}
export const follow = (userId: number) => async (dispatch: any) => {
    followUnfollow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}
export const unfollow = (userId: number) => async (dispatch: any) => {
    followUnfollow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}
