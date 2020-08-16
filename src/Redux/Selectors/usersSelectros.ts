import {AppStateType} from '../redux-store';

//Simple Selectors
export const getUsers = (state: AppStateType) => {
    return state.Users.users
}
export const getPageSize = (state: AppStateType) => {
    return state.Users.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.Users.totalUsersCount
}
export const getCurrentPages = (state: AppStateType) => {
    return state.Users.currentPages
}
export const getIsFetching = (state: AppStateType) => {
    return state.Users.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.Users.followingInProgress
}
