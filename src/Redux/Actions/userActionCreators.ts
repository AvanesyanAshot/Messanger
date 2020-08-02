import { SET_USERS, FOLLOW, UNFOLLOW, SET_TOTAL_USER_COUNT, SET_CURRENT_PAGE, TOGGLE_IS_FETCHING, TOGGLE_IS_FOLLOWING_IN_PROGRESS} from "../Reducers/usersReducer"
import { UsersType } from "../../types/types"

export const setUsersAC = (users: UsersType) => ({type: SET_USERS, users})
export const followSuccess = (userId: number) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId})
export const setCurrentPage = (page: number) => ({type: SET_CURRENT_PAGE, page})
export const setTotalUserCount = (num: number) => ({type: SET_TOTAL_USER_COUNT, num})
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingInProgress = (isFetching: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId})