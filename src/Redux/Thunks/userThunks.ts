import {usersAPI} from "../../DAL/api";
import {
    followSuccess, setTotalUserCount, setUsersAC,
    toggleIsFetching, toggleIsFollowingInProgress, unfollowSuccess, UserActionsType
} from "../Actions/userActionCreators";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../redux-store";

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, UserActionsType>

export const setUsers = (currentPages: number, pageSize: number): ThunkType  => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    let data = await usersAPI.getUsers(currentPages, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setTotalUserCount(data.totalCount))
    dispatch(setUsersAC(data.items))

}

const _followUnfollow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleIsFollowingInProgress(true, userId))
    let response = await apiMethod(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingInProgress(false, userId))
}
export const follow = (userId: number): ThunkType => async (dispatch: any) => {
    _followUnfollow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}
export const unfollow = (userId: number): ThunkType => async (dispatch: any) => {
    _followUnfollow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}
