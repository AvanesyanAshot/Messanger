//INIT
let initState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
}

//REDUCER
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'app/SET-AUTH-USER_DATA':
        case 'app/SET_CAPTCHA_URL':
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default authReducer