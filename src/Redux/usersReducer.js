let initState = {
    users: [
        // {id: 1,followed: true, name: 'Misha Ivanov', age: 21, location: {city: 'Moscow', county: 'Russia'}},
        // {id: 2,followed: false, name: 'Pasha Pupcov', age: 20, location: {city: 'Moscow', county: 'Russia'}},
        // {id: 3,followed: true, name: 'Vasia Tarnaiken', age: 19, location: {city: 'Moscow', county: 'Russia'}},
        // {id: 4,followed: false, name: 'Petys kulikov', age: 17, location: {city: 'Moscow', county: 'Russia'}},
    ]
}
// ACTION TYPE
let SET_USERS = 'SET_USERS';
let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'

// ACTION CREATOR
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})


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

        default:
            return state
    }
}

export default usersReducer