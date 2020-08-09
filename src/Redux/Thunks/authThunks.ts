import {ResultCodeEnum, ResultCodeWithCaptcha} from "../../DAL/api";
import {AuthActionsType, setAuthUserData, setCaptchaUrl} from "../Actions/authActionCreators";
import { stopSubmit } from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../redux-store";
import {authAPI} from "../../DAL/auth-api";
import {securityAPI} from "../../DAL/security-api";

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, AuthActionsType>

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const data = await authAPI.me()
    if (data.resultCode === ResultCodeEnum.Success) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch: any) => {
    const data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(getAuthUserData())
    } else {
        if (data.resultCode === ResultCodeWithCaptcha.Captcha) {
            dispatch(getCaptchaUrl())
        }
        let message = data.messages.length > 0
            ? data.messages[0]
            : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))

    }
}
export const logout = (): ThunkType => async (dispatch) => {
    const data = await authAPI.logout()
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(setCaptchaUrl(captchaUrl))
}