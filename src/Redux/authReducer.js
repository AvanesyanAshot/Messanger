import {authAPI} from "../DAL/api";

//INIT
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

// THUNK CREATOR
export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, login, email))
            }
        })
}
//REDUCER
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

export default authReducer