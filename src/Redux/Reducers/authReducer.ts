import {AuthActionsType} from "../Actions/authActionCreators";

//INIT
let initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}
export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case "app/SET_AUTH_USER_DATA":
        case "app/SET_CAPTCHA_URL":
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default authReducer