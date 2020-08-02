import { SET_USERS, FOLLOW, UNFOLLOW,
    SET_TOTAL_USER_COUNT, SET_CURRENT_PAGE, TOGGLE_IS_FETCHING,
    TOGGLE_IS_FOLLOWING_IN_PROGRESS} from "../Reducers/usersReducer"
import { UsersType } from "../../types/types"

type SetUsersACType = {
    type: typeof SET_USERS
    users: UsersType
}
export const setUsersAC = (users: UsersType): SetUsersACType => ({type: SET_USERS, users})
type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({type: FOLLOW, userId})
type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({type: UNFOLLOW, userId})
type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    page: number
}
export const setCurrentPage = (page: number): setCurrentPageActionType => ({type: SET_CURRENT_PAGE, page})
type setTotalUserCountActionType = {
    type: typeof SET_TOTAL_USER_COUNT
    num: number
}
export const setTotalUserCount = (num: number): setTotalUserCountActionType => ({type: SET_TOTAL_USER_COUNT, num})
type toggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})
type toggleIsFollowingInProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_IN_PROGRESS
    isFetching: boolean
    userId: number
}
export const toggleIsFollowingInProgress = (isFetching: boolean, userId: number): toggleIsFollowingInProgressActionType => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId})