import {usersAPI} from "../../DAL/api";
import {userActions, UserActionsType} from "../Actions/userActionCreators";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../redux-store";
import {Dispatch} from "redux";

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, UserActionsType>

export const setUsers = (currentPages: number, pageSize: number): ThunkType => async (dispatch) => {
    dispatch(userActions.toggleIsFetching(true))
    let data = await usersAPI.getUsers(currentPages, pageSize)
    dispatch(userActions.toggleIsFetching(false))
    dispatch(userActions.setTotalUserCount(data.totalCount))
    dispatch(userActions.setUsersAC(data.items))

}

const _followUnfollow = async (dispatch: Dispatch<UserActionsType>,
                               userId: number,
                               apiMethod: any,
                               actionCreator: (userId: number) => UserActionsType) => {
    dispatch(userActions.toggleIsFollowingInProgress(true, userId))
    let response = await apiMethod(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(userActions.toggleIsFollowingInProgress(false, userId))
}

export const follow = (userId: number): ThunkType => async (dispatch) => {
    _followUnfollow(dispatch, userId, usersAPI.follow.bind(usersAPI), userActions.followSuccess)
}
export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    _followUnfollow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), userActions.unfollowSuccess)
}
