export const SET_AUTH_USER_DATA = 'app/SET_AUTH_USER_DATA'
export const SET_CAPTCHA_URL = 'app/SET_CAPTCHA_URL'


//INIT
let initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

export type InitialStateType = typeof initialState

//REDUCER
const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
        case SET_CAPTCHA_URL:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default authReducer