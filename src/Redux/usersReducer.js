let initState = {
    users: [],
    pageSize: 9,
    totalUsersCount: 100,
    currentPages: 1

}
// ACTION TYPE
let SET_USERS = 'SET_USERS';
let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_CURRENT_PAGE = 'SETCURRENTPAGE'
let SET_TOTAL_USER_COUNT = 'SETTOTALUSERCOUNT'

// ACTION CREATOR
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalUserCount = (num) => ({type: SET_TOTAL_USER_COUNT, num})


const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
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


        default:
            return state
    }
}

export default usersReducer