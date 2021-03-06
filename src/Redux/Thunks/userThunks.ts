import { userActions, UserActionsType } from '../Actions/userActionCreators'
import { BaseThunkType } from '../redux-store'
import { Dispatch } from 'redux'
import { usersAPI } from '../../DAL/users-api'
import { DefaultResponseType } from '../../DAL/api'
import { FilterType } from '../Reducers/usersReducer'

type ThunkType = BaseThunkType<UserActionsType>

export const setUsers = (
    currentPage: number,
    pageSize: number,
    filter: FilterType
): ThunkType => async (dispatch) => {
    dispatch(userActions.toggleIsFetching(true))
    dispatch(userActions.setFilter(filter))
    let data = await usersAPI.getUsers(
        currentPage,
        pageSize,
        filter.term,
        filter.friend
    )
    dispatch(userActions.toggleIsFetching(false))
    dispatch(userActions.setTotalUserCount(data.totalCount))
    dispatch(userActions.setUsersAC(data.items))
}
const _followUnfollow = async (
    dispatch: Dispatch<UserActionsType>,
    userId: number,
    apiMethod: (userId: number) => Promise<DefaultResponseType>,
    actionCreator: (userId: number) => UserActionsType
) => {
    dispatch(userActions.toggleIsFollowingInProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(userActions.toggleIsFollowingInProgress(false, userId))
}
export const follow = (userId: number): ThunkType => async (dispatch) => {
    await _followUnfollow(
        dispatch,
        userId,
        usersAPI.follow.bind(usersAPI),
        userActions.followSuccess
    )
}
export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    await _followUnfollow(
        dispatch,
        userId,
        usersAPI.unfollow.bind(usersAPI),
        userActions.unfollowSuccess
    )
}
