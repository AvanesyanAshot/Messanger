import {UsersType} from "../../types/types"
import {InferActionsType} from "../redux-store";

export type UserActionsType = InferActionsType<typeof userActions>

export const userActions = {
    setUsersAC: (users: Array<UsersType>) => ({type: 'users/SET_USERS', users} as const),
    followSuccess: (userId: number) => ({type: 'users/FOLLOW', userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'users/UNFOLLOW', userId} as const),
    setCurrentPage: (page: number) => ({type: 'users/SET_CURRENT_PAGE', page} as const),
    setTotalUserCount: (num: number) => ({type: 'users/SET_TOTAL_USER_COUNT', num} as const),
    toggleIsFetching: (isFetching: boolean) => ({
        type: 'users/TOGGLE_IS_FETCHING',
        isFetching
    } as const),
    toggleIsFollowingInProgress: (isFetching: boolean, userId: number) => ({
        type: 'users/TOGGLE_IS_FOLLOWING_IN_PROGRESS',
        isFetching,
        userId
    } as const)
}
