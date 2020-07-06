let initState = {
    users: [
        {id: 1, firstName: 'Misha', lastName: 'Ivanov', age: 21, location: {city: 'Moscow', county: 'Russia'}},
        {id: 2, firstName: 'Pasha', lastName: 'Pupcov', age: 20, location: {city: 'Moscow', county: 'Russia'}},
        {id: 3, firstName: 'Vasia', lastName: 'Tarnaiken', age: 19, location: {city: 'Moscow', county: 'Russia'}},
    ]
}
// ACTION TYPE
let SET_USERS = 'SET_USERS';
let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'

// ACTION CREATOR
export const setUsersAC = (users) => ({type: SET_USERS}, users)
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})


const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW:
            //some logic
            return state
        case UNFOLLOW:
            //some logic
            return state
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }

        default:
            return state
    }
}

export default usersReducer