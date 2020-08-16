import {DefaultResponseType, instance, ResultCodeEnum, ResultCodeWithCaptcha} from './api';

type MeType = {
    id: number
    email: string
    login: string
}
type LoginType = {
    userId: number
}
type GetCaptchaUrlType = {
    url: string
}

export const authAPI = {
    me() {
        return instance.get<DefaultResponseType<MeType>>('auth/me').then(res => res.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<DefaultResponseType<LoginType, ResultCodeEnum | ResultCodeWithCaptcha>>('auth/login', {
            email,
            password,
            rememberMe,
            captcha
        }).then(res => res.data)
    },
    logout() {
        return instance.delete<DefaultResponseType>('auth/login').then(res => res.data)
    }
}