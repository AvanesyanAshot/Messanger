export const setAuthUserData = (id, login, email, isAuth) => ({
    type: 'app/SET-AUTH-USER_DATA',
    payload: {id, login, email, isAuth}
})
export const setCaptchaUrl = (captchaUrl) => ({
    type: 'app/SET_CAPTCHA_URL',
    payload: {captchaUrl}
})