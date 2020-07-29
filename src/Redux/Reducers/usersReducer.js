import {updateObjectInArray} from "../../utls/objectHelper";

// INIT
let initState = {
    users: [],
    pageSize: 9,
    totalUsersCount: 100,
    currentPages: 1,
    isFetching: false,
    followingInProgress: []
}


// REDUCER
const usersReducer = (state = initState, action) => {
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
                // ...state, users: [...state.users, ...action.users]
                ...state, users: [...action.users]
            }
        case 'users/SET-CURRENT-PAGE':
            return {
                ...state, currentPages: action.page
            }
        case 'users/SET-TOTAL-USER-COUNT':
            return {
                ...state, totalUsersCount: action.num
            }
        case 'users/TOGGLE-IS-FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }
        case 'users/TOGGLE-IS-FOLLOWING-IN-PROGRESS':
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