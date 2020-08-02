import {SET_AUTH_USER_DATA, SET_CAPTCHA_URL} from "../Reducers/authReducer"

type setAuthUserDataActionType = {
    type: typeof SET_AUTH_USER_DATA
    payload: {
        id: number | null
        login: string | null
        email: string | null
        isAuth: boolean
    }
}
type setCaptchaUrlActionType = {
    type: typeof SET_CAPTCHA_URL
    payload: { captchaUrl: string }
}

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean): setAuthUserDataActionType => ({
    type: SET_AUTH_USER_DATA,
    payload: {id, login, email, isAuth}
})
export const setCaptchaUrl = (captchaUrl: string): setCaptchaUrlActionType => ({
    type: SET_CAPTCHA_URL,
    payload: {captchaUrl}
})