import {authAPI, securityAPI} from "../../DAL/api";
import {AuthActionsType, setAuthUserData, setCaptchaUrl} from "../Actions/authActionCreators";
import { stopSubmit } from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../redux-store";
import {UserActionsType} from "../Actions/userActionCreators";

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, AuthActionsType>

export const getAuthUserData = (): ThunkType => async (dispatch: any) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch: any) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0
            ? response.data.messages[0]
            : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))

    }
}
export const logout = (): ThunkType => async (dispatch: any) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaUrl = (): ThunkType => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(setCaptchaUrl(captchaUrl))
}