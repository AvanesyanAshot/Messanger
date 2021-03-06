import {ResultCodeEnum, ResultCodeWithCaptcha} from '../../DAL/api';
import {authActions, AuthActionsType} from '../Actions/authActionCreators';
import {stopSubmit} from 'redux-form';
import {BaseThunkType} from '../redux-store';
import {authAPI} from '../../DAL/auth-api';
import {securityAPI} from '../../DAL/security-api';

type ThunkType = BaseThunkType<AuthActionsType | ReturnType<typeof stopSubmit>>

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const data = await authAPI.me()
    if (data.resultCode === ResultCodeEnum.Success) {
        let {id, login, email} = data.data
        dispatch(authActions.setAuthUserData(id, login, email, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
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
        dispatch(authActions.setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(authActions.setCaptchaUrl(captchaUrl))
}