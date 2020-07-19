import {authAPI} from "../DAL/api";
import {stopSubmit} from "redux-form";

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
export const setAuthUserData = (id, login, email, isAuth) => ({type: SET_AUTH_USER_DATA, data: {id, login, email, isAuth}})

// THUNK CREATOR
export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, login, email, true))
            }
        })
}
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }else {
                let message = response.data.messages.length > 0
                    ? response.data.messages[0]
                    : 'Some error'
                dispatch(stopSubmit('login',{_error: message}))

            }
        })
}
export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData(null, null, null, false))
            }
        })
}
//REDUCER
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {...state, ...action.data}
        default:
            return state
    }
}

export default authReducer