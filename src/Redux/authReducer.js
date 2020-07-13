let initState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

// ACTION TYPE
let SET_AUTH_USER_DATA = 'SET-AUTH-USER_DATA';

// ACTION CREATOR
export const setAuthUserData = (id, login, email) => ({type: SET_AUTH_USER_DATA, data: {id, login, email}})

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

export default authReducer