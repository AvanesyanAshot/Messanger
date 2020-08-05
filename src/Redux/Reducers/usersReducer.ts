import {updateObjectInArray} from "../../utls/objectHelper";
import { UsersType } from "../../types/types";
import { UserActionsType } from "../Actions/userActionCreators";

export const FOLLOW = 'users/FOLLOW'
export const UNFOLLOW = 'users/UNFOLLOW'
export const SET_USERS = 'users/SET_USERS'
export const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
export const SET_TOTAL_USER_COUNT = 'users/SET_TOTAL_USER_COUNT'
export const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
export const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_IN_PROGRESS'

// INIT
let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 9,
    totalUsersCount: 100,
    currentPages: 1,
    isFetching: false,
    followingInProgress: [] as Array<number> // array of user id
}

export type InitialStateType = typeof initialState


// REDUCER
const usersReducer = (state = initialState, action: UserActionsType): InitialStateType => {
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