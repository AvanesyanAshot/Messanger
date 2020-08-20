import {updateObjectInArray} from '../../utls/objectHelper';
import {UsersType} from '../../types/types';
import {UserActionsType} from '../Actions/userActionCreators';

// INIT
let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 9,
    totalUsersCount: 100,
    currentPages: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>, // array of user id
    filter: {
        term: '',
        friend: null as null | boolean
    }
}

export type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter

// REDUCER
const usersReducer = (state = initialState, action: UserActionsType): InitialStateType => {
    switch (action.type) {
        case 'users/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case 'users/UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case 'users/SET_USERS':
            return {
                ...state, users: [...action.users]
            }
        case 'users/SET_CURRENT_PAGE':
            return {
                ...state, currentPages: action.page
            }
        case 'users/SET_TOTAL_USER_COUNT':
            return {
                ...state, totalUsersCount: action.num
            }
        case 'users/SET_FILTER':
            return {
                ...state, filter: action.payload
            }
        case 'users/TOGGLE_IS_FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }
        case 'users/TOGGLE_IS_FOLLOWING_IN_PROGRESS':
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