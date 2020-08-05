import {SET_AUTH_USER_DATA, SET_CAPTCHA_URL} from "../Reducers/authReducer"

export type AuthActionsType = setAuthUserDataActionType | setCaptchaUrlActionType

type setAuthUserDataActionType = {
    type: typeof SET_AUTH_USER_DATA
    payload: {
        id: number | null
        login: string | null
        email: string | null
        isAuth: boolean
    }
}
export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean): setAuthUserDataActionType => ({
    type: SET_AUTH_USER_DATA,
    payload: {id, login, email, isAuth}
})

type setCaptchaUrlActionType = {
    type: typeof SET_CAPTCHA_URL
    payload: { captchaUrl: string }
}
export const setCaptchaUrl = (captchaUrl: string): setCaptchaUrlActionType => ({
    type: SET_CAPTCHA_URL,
    payload: {captchaUrl}
})