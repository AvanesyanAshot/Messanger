import {usersAPI} from "../DAL/api";
import {updateObjectInArray} from "../utls/objectHelper";

// INIT
let initState = {
    users: [],
    pageSize: 9,
    totalUsersCount: 100,
    currentPages: 1,
    isFetching: false,
    followingInProgress: []
}

// ACTION TYPE
let SET_USERS = 'users/SET_USERS';
let FOLLOW = 'users/FOLLOW'
let UNFOLLOW = 'users/UNFOLLOW'
let SET_CURRENT_PAGE = 'users/SETCURRENTPAGE'
let SET_TOTAL_USER_COUNT = 'users/SETTOTALUSERCOUNT'
let TOGGLE_IS_FETCHING = 'users/TOGGLEISFETCHING'
let TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'users/TOGGLEISFOLLOWINGINPROGRESS'

// ACTION CREATOR
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalUserCount = (num) => ({type: SET_TOTAL_USER_COUNT, num})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId})

// THUNK CREATOR
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

// REDUCER
const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {
                // ...state, users: [...state.users, ...action.users]
                ...state, users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPages: action.page
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state, totalUsersCount: action.num
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)

            }
        default:
            return state
    }
}

export default usersReducer