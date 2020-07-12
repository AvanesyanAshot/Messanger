let initState = {
    users: [],
    pageSize: 9,
    totalUsersCount: 100,
    currentPages: 1,
    isFetching: false

}
// ACTION TYPE
let SET_USERS = 'SET_USERS';
let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_CURRENT_PAGE = 'SETCURRENTPAGE'
let SET_TOTAL_USER_COUNT = 'SETTOTALUSERCOUNT'
let TOGGLE_IS_FETCHING = 'TOGGLEISFETCHING'

// ACTION CREATOR
export const setUsers = (users) => ({type: SET_USERS, users})
export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalUserCount = (num) => ({type: SET_TOTAL_USER_COUNT, num})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})


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
        default:
            return state
    }
}

export default usersReducer