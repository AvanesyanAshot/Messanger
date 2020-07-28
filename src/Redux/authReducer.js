import {authAPI, securityAPI} from "../DAL/api";
import {stopSubmit} from "redux-form";

//INIT
let initState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
}

// ACTION TYPE
let SET_AUTH_USER_DATA = 'app/SET-AUTH-USER_DATA';
let SET_CAPTCHA_URL = 'app/SET_CAPTCHA_URL';

// ACTION CREATOR
export const setAuthUserData = (id, login, email, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: {id, login, email, isAuth}
})
const setCaptchaUrl = (captchaUrl) => ({
    type: SET_CAPTCHA_URL,
    payload: {captchaUrl}
})

// THUNK CREATOR
export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}
export const login = (email, password, rememberMe, captcha = null) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10){
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0
            ? response.data.messages[0]
            : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))

    }
}
export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData(null, null, null, false))
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(setCaptchaUrl(captchaUrl))
}
//REDUCER
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
        case SET_CAPTCHA_URL:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default authReducer