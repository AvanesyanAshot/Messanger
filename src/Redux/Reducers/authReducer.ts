
export const SET_AUTH_USER_DATA = 'app/SET_AUTH_USER_DATA'
export const SET_CAPTCHA_URL = 'app/SET_CAPTCHA_URL'

export type initStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    captchaUrl: string | null
}
//INIT
let initState: initStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
}

//REDUCER
const authReducer = (state = initState, action: any):initStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
        case SET_CAPTCHA_URL:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default authReducer