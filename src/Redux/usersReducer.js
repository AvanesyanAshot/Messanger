import {usersAPI} from "../DAL/api";
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
let SET_USERS = 'SET_USERS';
let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_CURRENT_PAGE = 'SETCURRENTPAGE'
let SET_TOTAL_USER_COUNT = 'SETTOTALUSERCOUNT'
let TOGGLE_IS_FETCHING = 'TOGGLEISFETCHING'
let TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLEISFOLLOWINGINPROGRESS'

// ACTION CREATOR
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalUserCount = (num) => ({type: SET_TOTAL_USER_COUNT, num})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,isFetching,userId})

// THUNK CREATOR
export const setUsers = (currentPages, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPages, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsersAC(data.items))
            })
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                    dispatch(toggleIsFollowingInProgress(false, userId))
                }
            })
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                    dispatch(toggleIsFollowingInProgress(false, userId))
                }
            })

    }
}

// REDUCER
const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
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