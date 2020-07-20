import {createSelector} from "reselect";

//Simple Selectors
const getUsers = (state) => {
    return state.Users.users
}
export const getPageSize = (state) => {
    return state.Users.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.Users.totalUsersCount
}
export const getCurrentPages = (state) => {
    return state.Users.currentPages
}
export const getIsFetching = (state) => {
    return state.Users.isFetching
}
export const getFollowingInProgress = (state) => {
    return state.Users.followingInProgress
}

//TEST
export const getUsersSuper = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})

