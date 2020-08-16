import {InferActionsType} from '../redux-store';

export type AuthActionsType = InferActionsType<typeof authActions>

export const authActions = {
    setAuthUserData: (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
        type: 'app/SET_AUTH_USER_DATA',
        payload: {id, login, email, isAuth}
    } as const),
    setCaptchaUrl: (captchaUrl: string) => ({
        type: 'app/SET_CAPTCHA_URL',
        payload: {captchaUrl}
    } as const)
}


